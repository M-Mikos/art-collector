import { Link } from "react-router-dom";
import Header from "../Header/Index";
import Footer from "../Footer/Index";
import classes from "./Index.module.css";

/**
 * Presentation component for displaying error Page layout.
 * @returns JSX code with ErrorLayout component.
 */

function ErrorLayout() {
  console.log("Rendering ErrorLayout");
  return (
    <div className={classes.error__container}>
      <div className={classes.error__header}>
        <Header />
      </div>
      <div className={classes.error__main}>
        <div className={classes.error__img__wrap}>
          <img src="/404.svg" />
        </div>
        <h1>Page could not be found.</h1>
        <p>
          Return to <Link to="/">homepage</Link>.
        </p>
      </div>
      <div className={classes.error__footer}>
        <Footer />
      </div>
    </div>
  );
}

export default ErrorLayout;
