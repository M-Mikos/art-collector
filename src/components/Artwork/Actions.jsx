import { useDispatch, useSelector } from "react-redux";
import { favActions } from "../../store/fav-slice";
import { collectionsActions } from "../../store/collections-slice";
import { useRef, useState } from "react";

function Actions(props) {
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.fav.artworks);
  const collections = useSelector((state) => state.collections.collections);
  const collectionRef = useRef("");

  // set initial button state for default first selection option
  const [isInCollection, setIsInCollection] = useState(
    collections[0].artworks.includes(props.id)
  );

  const toggleFavHadler = () => {
    dispatch(favActions.toggle(props.id));
  };

  const isFav = () => {
    return favList.includes(props.id);
  };

  const isInCollectionCheck = (collectionId) => {
    return collections
      .find((item) => item.id === collectionId)
      .artworks.includes(props.id);
  };

  const changeHandler = () => {
    const collectionId = collectionRef.current.value;
    setIsInCollection(isInCollectionCheck(collectionId));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const collectionId = collectionRef.current.value;

    dispatch(
      collectionsActions.toggleArtwork({
        collectionId,
        artworkId: props.id,
      })
    );

    setIsInCollection((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleFavHadler}>
        {isFav() ? "Remove from fav" : "Add to fav"}
      </button>
      <form onSubmit={submitHandler}>
        <label htmlFor="collection">Collection:</label>
        <select
          id="collection"
          name="collection"
          ref={collectionRef}
          onChange={changeHandler}
        >
          {collections.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
        <button type="submit">
          {isInCollection ? "Remove from collection" : "Add to collection"}
        </button>
      </form>
    </>
  );
}

export default Actions;
