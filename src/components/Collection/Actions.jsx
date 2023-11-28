import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { collectionsActions } from "../../store/collections-slice";
import { uiActions } from "../../store/ui-slice";
import useNotification from "../../hooks/useNotification";
import Icon from "../UI/Icon";

import classes from "./Actions.module.css";

/**
 * Presentational component for displaying collection banner.
 * @param {Object} props
 * @param {Object[]} props.items collection artworks
 * @param {Object} props.collection collection details
 * @param {string} props.message optional error/information message
 * @returns JSX code with Collection component.
 */

function Actions(props) {
  console.log("Rendering Actions");
  const { id, title, description } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { collectionId } = useParams();
  const [showNotification] = useNotification();

  const editHandler = () => {
    dispatch(
      uiActions.toggleModal({
        mode: "edit",
        collectionId: id,
        currentTitle: title,
        currentDescription: description,
      })
    );
  };

  const deleteHandler = () => {
    dispatch(collectionsActions.remove(id));
    showNotification("Collection deleted");
    collectionId && navigate(`/collections`);
  };

  return (
    <div className={classes.actions__wrapper}>
      <button onClick={editHandler} className={classes.actions__button}>
        <Icon src="/edit-line.svg" />
        <span>Edit</span>
      </button>
      <button onClick={deleteHandler} className={classes.actions__button}>
        <Icon src="/delete-line.svg" />
        <span>Delete</span>
      </button>
    </div>
  );
}

export default Actions;
