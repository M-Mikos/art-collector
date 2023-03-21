import ReactDOM from "react-dom";
import classes from "./PopupNotification.module.css";

function PopupNotification(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.popup}>{props.children}</div>,
        document.getElementById("popup-notification-root")
      )}
    </>
  );
}
export default PopupNotification;
