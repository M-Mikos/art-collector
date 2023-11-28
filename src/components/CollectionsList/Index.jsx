import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import CollectionItem from "./CollectionItem";
import Icon from "../UI/Icon";
import classes from "./Index.module.css";

/**
 * Component for displaying list of collection thumbnails.
 * Gets collections data from React Redux store
 * @param {Object} props
 * @param {Object} props.thumbnails collections thubnails data
 * @returns JSX code with CollectionsList component.
 */

function CollectionsList(props) {
  console.log("Rendering CollectionList");
  const { thumbnails } = props;
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
        {collections.map((collection) => (
          <li key={collection.id} className={classes.item}>
            <CollectionItem
              data={collection}
              thumbnail={thumbnails.find((obj) => obj.id === collection.id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CollectionsList;
