import { useDispatch, useSelector } from "react-redux";
import { favActions } from "../../store/fav-slice";
import { collectionsActions } from "../../store/collections-slice";
import { useRef, useState } from "react";
import useNotification from "../../hooks/useNotification";
import AddCollection from "../CollectionsList/AddCollection";
import Modal from "../UI/Modal";
import Icon from "../UI/Icon";

import classes from "./Actions.module.css";

function Actions(props) {
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.fav.artworks);
  const collections = useSelector((state) => state.collections.collections);
  const collectionRef = useRef("");
  const [notification, isNotification, showNotification] = useNotification();
  const [isModal, setIsModal] = useState(false);

  // set initial button state for default first selection option
  const [isInCollection, setIsInCollection] = useState(() => {
    collections[0] ? collections[0].artworks.includes(props.id) : null;
  });

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
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
      <button type="submit">
        {isInCollection ? (
          <div className={classes["btn--collection"]}>
            <Icon src="src/assets/icons/remove-line.svg" />
            <span>Remove</span>
          </div>
        ) : (
          <div className={classes["btn--collection"]}>
            <Icon src="src/assets/icons/add-line.svg" />
            <span>Add</span>
          </div>
        )}
      </button>{" "}
    </>
  );

  const addCollection = (
    <>
      <button onClick={openModal}>Create Collection</button>
      {isModal && (
        <Modal close={closeModal}>
          <AddCollection
            mode={"Add"}
            close={closeModal}
            showNotification={showNotification}
          />
        </Modal>
      )}
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
      <form className={classes["select-collection__bar"]} onSubmit={toggleCollectionHadler}>
        {collections.length !== 0 ? selectCollection : addCollection}
      </form>
      {isNotification && notification}
    </div>
  );
}

export default Actions;
