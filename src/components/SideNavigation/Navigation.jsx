import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={classes["site-nav"]}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        to="/"
        end
      >
        <div className={classes["icon__wrap"]}>
          <img src="src/assets/icons/home-line.svg" />
        </div>
        <span>Home</span>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        to="/favourites"
        end
      >
        <div className={classes["icon__wrap"]}>
          <img src="src/assets/icons/heart-line.svg" />
        </div>
        <span>Favourites</span>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        to="/collections"
        end
      >
        <div className={classes["icon__wrap"]}>
          <img src="src/assets/icons/image-2-line.svg" />
        </div>
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
