import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { collectionsActions } from "../../store/collections-slice";
import { uiActions } from "../../store/ui-slice";
import useNotification from "../../hooks/useNotification";
import Icon from "../UI/Icon";
import {
  ADD_TO_COLLECTION_MESSAGE,
  REMOVE_FROM_COLLECTION_MESSAGE,
} from "../../../config";
import classes from "./AddToCollection.module.css";

/**
 * Component for displaying and controlling add to collection feature.
 * Component is used for adding or removing artwork from selected collection.
 * Component dispatches modification on collections data in React Redux store.
 * Component is calling a notification after dispatching an action.
 * Gets collection list data from React Redux store.
 *
 * @param {Object} props
 * @param {string} props.id artwork ID
 * @returns JSX code with AddToCollection component.
 */

function AddToCollection({ id }) {
  const dispatch = useDispatch();
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

  const toggleAddCollection = () => {
    dispatch(
      uiActions.toggleModal({
        mode: "add",
      })
    );
  };

  const checkIfIsInCollection = (collectionId) => {
    if (collectionId)
      return collections
        .find((item) => item.id === collectionId)
        .artworks.includes(id);
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
      ? showNotification(
          REMOVE_FROM_COLLECTION_MESSAGE,
          `/collections/${collectionId}`
        )
      : showNotification(ADD_TO_COLLECTION_MESSAGE, `/collections/`);

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
      <button onClick={toggleAddCollection}>
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
          {collections.length !== 0 ? (
            <form
              className={classes["select-collection__bar"]}
              onSubmit={toggleCollectionHadler}
            >
              {renderSelectCollection}
            </form>
          ) : (
            renderAddCollection
          )}
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
    </>
  );
}

export default AddToCollection;
