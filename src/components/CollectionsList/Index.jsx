import Card from "../UI/Card";
import CollectionItem from "./CollectionItem";
import Modal from "../UI/Modal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./Index.module.css";
import { useState } from "react";
import AddCollection from "./AddCollection";

function CollectionsList() {
  const collections = useSelector((state) => state.collections.collections);
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <button onClick={openModal}>Dodaj kolekcję</button>
      {isModal && (
        <Modal close={closeModal}>
          <AddCollection />
        </Modal>
      )}
      <ul className={classes["items-grid"]}>
        {collections.map((collection) => (
          <li key={collection.id} className={classes.item}>
            <Link to={collection.id}>
              <Card>
                <CollectionItem data={collection} />
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CollectionsList;
