import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <div className={classes.logo}>
        <h1 className={classes["logo__name"]}>ARTIC ART COLLECTION</h1>
        <p className={classes["logo__tagline"]}>Art Institute of Chicago </p>
      </div>
    </Link>
  );
}

export default Logo;
