import { NavLink } from "react-router-dom";
import Icon from "../UI/Icon";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={classes["site-nav"]}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        to="/"
        end
      >
        <Icon src="src/assets/icons/home-line.svg" />
        <span>Home</span>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        to="/favourites"
        end
      >
        <Icon src="src/assets/icons/heart-line.svg" />
        <span>Favourites</span>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        to="/collections"
        end
      >
        <Icon src="src/assets/icons/image-2-line.svg" />
        <span>Collections</span>
      </NavLink>
      {/* <NavLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        to="/"
        end
      >
        <button>Create Collection</button>
      </NavLink> */}
    </nav>
  );
}

export default Navigation;
