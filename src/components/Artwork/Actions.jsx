import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { collectionsActions } from "../../store/collections-slice";
import { favActions } from "../../store/fav-slice";
import { uiActions } from "../../store/ui-slice";
import useNotification from "../../hooks/useNotification";
import Icon from "../UI/Icon";
import classes from "./Actions.module.css";

/**
 * Component for displaying and controlling add to favourites and add to collections.
 * Component is used for adding or removing artwork from selected collection or favourites list.
 * Component dispatches modification on collections and favourites data in React Redux store.
 * Component is calling a notification after dispatching an action.
 * Gets favourites and collection list data from React Redux store.
 *
 * @param {Object} props
 * @param {string} props.id artwork ID
 * @returns JSX code with Details component.
 */

function Actions(props) {
  const { id } = props.id;
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.fav.artworks);
  const collections = useSelector((state) => state.collections.collections);
  const collectionRef = useRef("");
  const params = useParams();
  const [showNotification] = useNotification();
  const location = useLocation();

  const [isInCollection, setIsInCollection] = useState(false);

  useEffect(() => {
    setIsInCollection(
      collections[0] ? collections[0].artworks.includes(id) : false
    );
  }, [collections, id]);

  const toggleAdd = () => {
    dispatch(
      uiActions.toggleModal({
        mode: "add",
      })
    );
  };

  const isFav = () => {
    return favList.includes(id);
  };

  const checkIfIsInCollection = (collectionId) => {
    return collections
      .find((item) => item.id === collectionId)
      .artworks.includes(id);
  };

  const toggleFavHadler = () => {
    isFav()
      ? showNotification("Removed from favourites")
      : showNotification("Added to favourites");

    dispatch(favActions.toggle(id));
  };

  const changeHandler = () => {
    const collectionId = collectionRef.current.value;
    setIsInCollection(checkIfIsInCollection(collectionId));
  };

  const toggleCollectionHadler = (event) => {
    event.preventDefault();

    const collectionId =
      event._reactName === "onSubmit"
        ? collectionRef.current.value
        : params.collectionId;

    checkIfIsInCollection(collectionId)
      ? showNotification("Removed from collection")
      : showNotification("Added to collection");

    dispatch(
      collectionsActions.toggleArtwork({
        collectionId,
        artworkId: id,
      })
    );

    setIsInCollection((prevState) => !prevState);
  };

  const renderSelectCollection = (
    <>
      <select
        name="collection"
        ref={collectionRef}
        onChange={changeHandler}
        className={classes["select-collection__list"]}
      >
        {collections.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
      <button type="submit" className={classes["btn--collection"]}>
        {isInCollection ? (
          <>
            <Icon src="/remove-line.svg" />
            <span>Remove</span>
          </>
        ) : (
          <>
            <Icon src="/add-line.svg" />
            <span>Add</span>
          </>
        )}
      </button>
    </>
  );

  const renderAddCollection = (
    <>
      <button onClick={toggleAdd}>
        <div className={classes["btn--collection"]}>
          <Icon src="/add-line.svg" />
          <span>Create collection</span>
        </div>
      </button>
    </>
  );

  return (
    <>
      {location.pathname !== "/favourites" && !params.collectionId && (
        <div className={classes["actions-bar"]}>
          <button
            className={classes["btn--fav"]}
            aria-label="Toggle favourites"
            onClick={toggleFavHadler}
          >
            {isFav() ? (
              <Icon alt="Remove from favourites" src="/heart-fill.svg" />
            ) : (
              <Icon alt="Add to favourites" src="/heart-line.svg" />
            )}
          </button>
          <form
            className={classes["select-collection__bar"]}
            onSubmit={toggleCollectionHadler}
          >
            {collections.length !== 0
              ? renderSelectCollection
              : renderAddCollection}
          </form>
        </div>
      )}
      {params.collectionId && (
        <button
          className={classes["btn--delete"]}
          onClick={toggleCollectionHadler}
        >
          <Icon alt="Remove from collection" src="/delete-line.svg" /> Remove
          from collection
        </button>
      )}
      {location.pathname === "/favourites" && (
        <button className={classes["btn--delete"]} onClick={toggleFavHadler}>
          <Icon alt="Remove from favourites" src="/delete-line.svg" /> Remove
          from favourites
        </button>
      )}
    </>
  );
}

export default Actions;
