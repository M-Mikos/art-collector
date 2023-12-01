import { useDispatch, useSelector } from "react-redux";
import { favActions } from "../../store/fav-slice";
import useNotification from "../../hooks/useNotification";
import Icon from "../UI/Icon";
import {
  ADD_TO_FAVOURITES_MESSAGE,
  REMOVE_FROM_FAVOURITES_MESSAGE,
} from "../../../config";
import classes from "./AddToFavourites.module.css";

/**
 * Component for displaying and controlling add to favourites feature.
 * Component is used for adding or removing artwork from favourites list.
 * Component dispatches modification on favourites data in React Redux store.
 * Component is calling a notification after dispatching an action.
 * Gets favourites list data from React Redux store.
 *
 * @param {Object} props
 * @param {string} props.id artwork ID
 * @returns JSX code with AddToFavourites component.
 */

function AddToFavourites({ id }) {
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.fav.artworks);
  const [showNotification] = useNotification();

  const isFav = () => favList.includes(id);

  const toggleFavHadler = () => {
    isFav()
      ? showNotification(REMOVE_FROM_FAVOURITES_MESSAGE, "/favourites")
      : showNotification(ADD_TO_FAVOURITES_MESSAGE, "/favourites");

    dispatch(favActions.toggle(id));
  };

  return (
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
  );
}

export default AddToFavourites;
