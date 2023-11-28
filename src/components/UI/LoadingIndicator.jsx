import classes from "./LoadingIndicator.module.css";

/**
 * Presentation component for displaying animated loading indicator.
 *
 * @returns JSX code with loading indicator element.
 */

function LoadingIndicator() {
  console.log("Rendering LoadingIndicator Component");
  return (
    <div className={classes["loading__wrapper"]}>
      <div className={classes["loading__outer"]}>
        <div
          className={`${classes["loading__inner"]} ${classes["loading__inner--1"]}`}
        ></div>
        <div
          className={`${classes["loading__inner"]} ${classes["loading__inner--2"]}`}
        ></div>
        <div
          className={`${classes["loading__inner"]} ${classes["loading__inner--3"]}`}
        ></div>
        <div
          className={`${classes["loading__inner"]} ${classes["loading__inner--4"]}`}
        ></div>
      </div>
    </div>
  );
}
export default LoadingIndicator;
