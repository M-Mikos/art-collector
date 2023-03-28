import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./CollectionsNamesList.module.css";

function CollectionsNamesList() {
  const collections = useSelector((state) => state.collections.collections);

  return (
    <>
      <span className={classes["collection-list-title"]}>
        Your collections:
      </span>
      <ul className={classes["collection-list"]}>
        {collections.map((collection) => (
          <li key={collection.id} className={classes.item}>
            <NavLink to={`collections/${collection.id}`}>
              {collection.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CollectionsNamesList;
