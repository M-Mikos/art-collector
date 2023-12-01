import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./CollectionsNamesList.module.css";

/**
 * Presentation component for displaying collection names list.
 * Gets collections data from React Redux state.
 *
 * @returns JSX code with sidebar component.
 */

function CollectionsNamesList() {
  const collections = useSelector((state) => state.collections.collections);

  return (
    <div className={classes["collections-list__container"]}>
      <span className={classes["collection-list__title"]}>
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
    </div>
  );
}

export default CollectionsNamesList;
