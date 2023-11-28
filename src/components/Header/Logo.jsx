import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

/**
 * Presentation component for displaying application logo
 * @returns JSX code with logo component.
 */

function Logo() {
  console.log("Rendering Logo");
  return (
    <div className={classes.logo__wrapper}>
      <Link to="/" aria-label="Return to Homepage">
        <img
          className={classes.logo}
          alt="Art Collector logo"
          src={"/art-collector.svg"}
        />
      </Link>
    </div>
  );
}

export default Logo;
