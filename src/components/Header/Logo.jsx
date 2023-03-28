import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

function Logo() {
  return (
    <div className={classes["logo__wrapper"]}>
      <Link to="/">
        <img className={classes.logo} src={"src/assets/art-collector.svg"} />
      </Link>
    </div>
  );
}

export default Logo;
