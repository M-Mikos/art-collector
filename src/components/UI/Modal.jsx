import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Icon from "./Icon";
import classes from "./Modal.module.css";

/**
 * Component for toggling and displaying modal wrapper. Modal state is application-wide, hence it is stored in redux store.
 *
 * @param props
 * @param props.children elements passed inside Modal tag
 * @returns JSX code with Modal element wrapped around children prop.
 */

function Modal(props) {
  console.log("Rendering Modal Component");
  const { children } = props;
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(uiActions.toggleModal());
  };

  return ReactDOM.createPortal(
    <div className={classes.modal}>
      <div className={classes.modal__overlay} onClick={toggle}></div>
      <div className={classes.modal__window}>
        <button className={classes.modal__close} onClick={toggle}>
          <Icon src="/close-line.svg" />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
export default Modal;
