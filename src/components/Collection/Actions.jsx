import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { collectionsActions } from "../../store/collections-slice";
import useNotification from "../../hooks/useNotification";
import { uiActions } from "../../store/ui-slice";

function Actions(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    navigate(`/collections`);
    showNotification("Collection deleted");
  };

  return (
    <>
      <button onClick={editHandler}>Edit</button>
      <button onClick={deleteHandler}>Delete</button>
    </>
  );
}

export default Actions;
