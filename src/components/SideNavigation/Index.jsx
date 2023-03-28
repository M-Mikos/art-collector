import CollectionsNamesList from "./CollectionsNamesList";
import Navigation from "./Navigation";
import classes from "./Index.module.css";

function Sidebar() {
  return (
    <aside>
      <Navigation />
      <CollectionsNamesList />
    </aside>
  );
}

export default Sidebar;
