import ReactDOM from "react-dom";
import classes from "./PopupNotification.module.css";
import { NavLink } from "react-router-dom";

/**
 * Component for displaying notification wrapper.
 *
 * @param props
 * @param props.children elements passed inside PopupNotification tag
 * @returns JSX code with PopupNotification element wrapped around children prop.
 */

function PopupNotification(props) {
  const { children, link } = props;
  return ReactDOM.createPortal(
    <NavLink to={link}>
      <div className={classes.popup__wrapper}>
        <div className={classes.popup}>{children}</div>
      </div>
    </NavLink>,
    document.getElementById("popup-notification-root")
  );
}
export default PopupNotification;
