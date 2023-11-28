import ReactDOM from "react-dom";
import classes from "./PopupNotification.module.css";

/**
 * Component for displaying notification wrapper.
 *
 * @param props
 * @param props.children elements passed inside PopupNotification tag
 * @returns JSX code with PopupNotification element wrapped around children prop.
 */

function PopupNotification(props) {
  console.log("Rendering PopupNotification Component");
  const { children } = props;
  return ReactDOM.createPortal(
    <div className={classes["popup__wrapper"]}>
      <div className={classes.popup}>{children}</div>
    </div>,
    document.getElementById("popup-notification-root")
  );
}
export default PopupNotification;
