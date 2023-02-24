import { NavLink } from "react-router-dom";
import classes from "./UserNavigation.module.css";

function UserNavigation() {
  return (
    <nav>
      <ul>
        <NavLink to="/my-account">Favourites</NavLink>
        <NavLink to="/my-account/collections">Collections</NavLink>
      </ul>
    </nav>
  );
}

export default UserNavigation;
