import CollectionItem from "./CollectionItem";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./Index.module.css";
import { uiActions } from "../../store/ui-slice";
import Icon from "../UI/Icon";

function CollectionsList(props) {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collections.collections);

  console.log(props.thumbnails);

  const openModal = () => {
    dispatch(uiActions.toggleModal({ mode: "add" }));
  };

  return (
    <>
      <div className={classes.banner}>
        <h1>Collections</h1>
        <button onClick={openModal} className={classes.button}>
          <Icon src="src/assets/icons/add-box-fill.svg" />
          Add Collection
        </button>
      </div>

      <ul className={classes["items-grid"]}>
        {collections.map((collection, i) => {
          return (
            <li key={collection.id} className={classes.item}>
              <CollectionItem
                data={collection}
                thumbnail={props.thumbnails[i]}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CollectionsList;
