import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { collectionsActions } from "../../store/collections-slice";
import useNotification from "../../hooks/useNotification";
import { uiActions } from "../../store/ui-slice";
import Icon from "../UI/Icon";

import classes from "./Actions.module.css";

function Actions(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { collectionId } = useParams();
  const [showNotification] = useNotification();

  const editHandler = () => {
    dispatch(
      uiActions.toggleModal({
        mode: "edit",
        collectionId: props.collectionId,
        currentTitle: props.currentTitle,
        currentDescription: props.currentDescription,
      })
    );
  };

  const deleteHandler = () => {
    dispatch(collectionsActions.remove(props.collectionId));
    showNotification("Collection deleted");
    collectionId && navigate(`/collections`);
  };

  return (
    <div className={classes["actions__wrapper"]}>
      <button onClick={editHandler} className={classes["actions__button"]}>
        <Icon src="/edit-line.svg" />
        <span>Edit</span>
      </button>
      <button onClick={deleteHandler} className={classes["actions__button"]}>
        <Icon src="/delete-line.svg" />
        <span>Delete</span>
      </button>
    </div>
  );
}

export default Actions;
