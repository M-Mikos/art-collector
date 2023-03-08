import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { collectionsActions } from "../../store/collections-slice";

function Actions() {
  const dispatch = useDispatch();
  const { collectionId } = useParams();
  const navigate = useNavigate();

  const editHandler = () => {};

  const deleteHandler = () => {
    dispatch(collectionsActions.remove(collectionId));
    navigate("/my-account/collections");
  };

  return (
    <>
      <button>Edit</button>
      <button onClick={deleteHandler}>Delete</button>
    </>
  );
}

export default Actions;
