import { Link } from "react-router-dom";
import Header from "../Header/Index";
import Footer from "../Footer/Index";
import classes from "./Index.module.css";

function ErrorRoot() {
  return (
    <div className={classes["error__container"]}>
      <div className={classes["error__header"]}>
        <Header />
      </div>
      <div className={classes["error__main"]}>
        <div className={classes["error__img__wrap"]}>
          <img src="src/assets/404.svg" />
        </div>
        <h1>Page could not be found.</h1>
        <p>
          Return to <Link to="/">homepage</Link>.
        </p>
      </div>
      <div className={classes["error__footer"]}>
        <Footer />
      </div>
    </div>
  );
}

export default ErrorRoot;
