import { useDispatch, useSelector } from "react-redux";
import { favActions } from "../../store/fav-slice";
import { collectionsActions } from "../../store/collections-slice";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";

function Actions(props) {
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.fav.artworks);
  const collections = useSelector((state) => state.collections.collections);
  const { artworkId } = useParams();
  const collectionRef = useRef("");
  const [isInCollection, setIsInCollection] = useState(
    collections[0].artworks.includes(+artworkId)
  );

  const toggleFavHadler = () => {
    dispatch(favActions.toggle(props.id));
  };

  const isFav = () => {
    return favList.includes(props.id);
  };

  const changeHandler = () => {
    const collectionId = collectionRef.current.value;
    console.log(collectionId);

    if (
      collections
        .find((item) => item.id === collectionId)
        .artworks.includes(+artworkId)
    ) {
      setIsInCollection(true);
    } else {
      setIsInCollection(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const collectionId = collectionRef.current.value;

    dispatch(
      collectionsActions.toggleArtwork({
        collectionId,
        artworkId,
      })
    );
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
