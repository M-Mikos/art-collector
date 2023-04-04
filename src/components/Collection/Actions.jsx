import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useNotification from "../../hooks/useNotification";
import { collectionsActions } from "../../store/collections-slice";
import AddCollection from "../CollectionsList/AddCollection";
import Modal from "../UI/Modal";

function Actions(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [notification, isNotification, showNotification] = useNotification();
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const deleteHandler = () => {
    dispatch(collectionsActions.remove(props.collectionId));
    navigate(`/collections?deleted=${props.collectionId}`);
  };

  return (
    <>
      <button onClick={openModal}>Edit</button>
      <button onClick={deleteHandler}>Delete</button>
      {isModal && (
        <Modal close={closeModal}>
          <AddCollection
            mode={"Edit"}
            close={closeModal}
            showNotification={showNotification}
            collectionId={props.collectionId}
            currentTitle={props.currentTitle}
            currentDescription={props.currentDescription}
          />
        </Modal>
      )}
      {isNotification && notification}
    </>
  );
}

export default Actions;
