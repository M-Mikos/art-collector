import CollectionItem from "./CollectionItem";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Index.module.css";
import { uiActions } from "../../store/ui-slice";
import Icon from "../UI/Icon";

function CollectionsList(props) {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collections.collections);

  const openModal = () => {
    dispatch(uiActions.toggleModal({ mode: "add" }));
  };

  return (
    <>
      <div className={classes.banner}>
        <button onClick={openModal} className={classes.button}>
          <Icon src="/add-box-fill.svg" />
          Create Collection
        </button>
      </div>

      <ul className={classes["items-grid"]}>
        {collections.map((collection) => {
          return (
            <li key={collection.id} className={classes.item}>
              <CollectionItem
                data={collection}
                thumbnail={
                  props.thumbnails.filter((obj) => obj.id === collection.id)[0]
                }
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CollectionsList;
