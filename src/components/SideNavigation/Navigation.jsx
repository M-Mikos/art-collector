import { NavLink } from "react-router-dom";
import Icon from "../UI/Icon";
import classes from "./Navigation.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

function Navigation() {
  const dispatch = useDispatch();

  const toggleAdd = () => {
    dispatch(
      uiActions.toggleModal({
        mode: "add",
      })
    );
  };

  return (
    <nav className={classes["site-nav"]}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        to="/"
        end
      >
        <Icon src="/home-line.svg" />
        <span>Home</span>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        to="/favourites"
        end
      >
        <Icon src="/heart-line.svg" />
        <span>Favourites</span>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        to="/collections"
        end
      >
        <Icon src="/image-2-line.svg" />
        <span>Collections</span>
      </NavLink>

      <button className={classes.button} onClick={toggleAdd}>
        <Icon src="/add-line.svg" />
        <span>Create Collection</span>
      </button>
    </nav>
  );
}

export default Navigation;
