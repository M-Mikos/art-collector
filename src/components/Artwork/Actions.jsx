import { useDispatch, useSelector } from "react-redux";
import { favActions } from "../../store/fav-slice";
import { collectionsActions } from "../../store/collections-slice";
import { useRef, useState } from "react";
import AddCollection from "../CollectionsList/AddCollection";
import Modal from "../UI/Modal";
import Icon from "../UI/Icon";

import classes from "./Actions.module.css";
import useNotification from "../../hooks/useNotification";
import { uiActions } from "../../store/ui-slice";

function Actions(props) {
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.fav.artworks);
  const collections = useSelector((state) => state.collections.collections);
  const collectionRef = useRef("");
  const [showNotification] = useNotification();

  // set initial button state for default first selection option
  const [isInCollection, setIsInCollection] = useState(() => {
    collections[0] ? collections[0].artworks.includes(props.id) : null;
  });

  const toggleAdd = () => {
    dispatch(
      uiActions.toggleModal({
        mode: "add",
      })
    );
  };

  const isFav = () => {
    return favList.includes(props.id);
  };

  const checkIfIsInCollection = (collectionId) => {
    return collections
      .find((item) => item.id === collectionId)
      .artworks.includes(props.id);
  };

  const toggleFavHadler = () => {
    // Notification

    isFav()
      ? showNotification("Removed from favorites")
      : showNotification("Added to favorites");

    dispatch(favActions.toggle(props.id));
  };

  const changeHandler = () => {
    const collectionId = collectionRef.current.value;
    setIsInCollection(checkIfIsInCollection(collectionId));
  };

  const toggleCollectionHadler = (event) => {
    event.preventDefault();
    const collectionId = collectionRef.current.value;

    // Notification
    checkIfIsInCollection(collectionId)
      ? showNotification("Removed from collection")
      : showNotification("Added to collection");

    dispatch(
      collectionsActions.toggleArtwork({
        collectionId,
        artworkId: props.id,
      })
    );

    setIsInCollection((prevState) => !prevState);
  };

  const selectCollection = (
    <>
      <select
        id="collection"
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
            <Icon src="src/assets/icons/remove-line.svg" />
            <span>Remove</span>
          </>
        ) : (
          <>
            <Icon src="src/assets/icons/add-line.svg" />
            <span>Add</span>
          </>
        )}
      </button>{" "}
    </>
  );

  const addCollection = (
    <>
      <button onClick={toggleAdd}>
        <div className={classes["btn--collection"]}>
          <Icon src="src/assets/icons/add-line.svg" />
          <span>Create collection</span>
        </div>
      </button>
    </>
  );

  return (
    <div className={classes["actions-bar"]}>
      <button className={classes["btn--fav"]} onClick={toggleFavHadler}>
        {isFav() ? (
          <Icon src="src/assets/icons/heart-fill.svg" />
        ) : (
          <Icon src="src/assets/icons/heart-line.svg" />
        )}
      </button>
      <form
        className={classes["select-collection__bar"]}
        onSubmit={toggleCollectionHadler}
      >
        {collections.length !== 0 ? selectCollection : addCollection}
      </form>
    </div>
  );
}

export default Actions;
