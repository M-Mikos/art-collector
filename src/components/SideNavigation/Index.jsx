import { useSelector } from "react-redux";
import CollectionsNamesList from "./CollectionsNamesList";
import Navigation from "./Navigation";
import classes from "./Index.module.css";

/**
 * Component for displaying sidebar content.
 *
 * @returns JSX code with sidebar component.
 */

function Sidebar() {
  console.log("Rendering SiteNavigation");
  const isCollection =
    useSelector((state) => state.collections.collections).length > 0;
  return (
    <aside className={classes.sidebar}>
      <Navigation />
      {isCollection && <CollectionsNamesList />}
    </aside>
  );
}

export default Sidebar;
