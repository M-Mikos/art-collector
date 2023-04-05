import CollectionItem from "./CollectionItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./Index.module.css";
import { uiActions } from "../../store/ui-slice";

function CollectionsList(props) {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collections.collections);

  console.log(props.thumbnails);

  const openModal = () => {
    dispatch(uiActions.toggleModal({ mode: "add" }));
  };

  return (
    <>
      <button onClick={openModal}>Add Collection</button>
      <ul className={classes["items-grid"]}>
        {collections.map((collection, i) => (
          <li key={collection.id} className={classes.item}>
            <CollectionItem data={collection} thumbnail={props.thumbnails[i]} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CollectionsList;
