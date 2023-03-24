import Card from "../UI/Card";
import CollectionItem from "./CollectionItem";
import Modal from "../UI/Modal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./Index.module.css";
import { useEffect, useState } from "react";
import AddCollection from "./AddCollection";
import useNotification from "../../hooks/useNotification";
import Actions from "../Collection/Actions";

function CollectionsList() {
  const collections = useSelector((state) => state.collections.collections);
  const [isModal, setIsModal] = useState(false);
  const [notification, isNotification, showNotification] = useNotification();

  const deletedID = new URLSearchParams(location.search).get("deleted");

  // Show notification after redirect from deleted collection
  useEffect(() => {
    deletedID && showNotification("Collection deleted");
  }, [deletedID]);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <button onClick={openModal}>Add Collection</button>
      {isModal && (
        <Modal close={closeModal}>
          <AddCollection
            mode={"Add"}
            close={closeModal}
            showNotification={showNotification}
          />
        </Modal>
      )}
      <ul className={classes["items-grid"]}>
        {collections.map((collection) => (
          <li key={collection.id} className={classes.item}>
            <Card>
              <Link to={collection.id}>
                <CollectionItem data={collection} />
              </Link>
              <Actions
                collectionId={collection.id}
                currentTitle={collection.title}
                currentDescription={collection.description}
              />
            </Card>
          </li>
        ))}
      </ul>
      {isNotification && notification}
    </>
  );
}

export default CollectionsList;
