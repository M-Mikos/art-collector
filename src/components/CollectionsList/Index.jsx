import Card from "../UI/Card";
import CollectionItem from "./CollectionItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./Index.module.css";
import AddCollection from "./AddCollection";
import Actions from "../Collection/Actions";
import { uiActions } from "../../store/ui-slice";

function CollectionsList() {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collections.collections);

  const openModal = () => {
    dispatch(uiActions.toggleModal({ mode: "add" }));
  };

  return (
    <>
      <button onClick={openModal}>Add Collection</button>
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
    </>
  );
}

export default CollectionsList;
