import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <Link to="my-account">
      <button>My Account</button>
    </Link>
  );
}

export default MainNavigation;
