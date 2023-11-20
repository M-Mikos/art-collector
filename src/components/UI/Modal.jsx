import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Icon from "./Icon";

function Modal(props) {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(uiActions.toggleModal());
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.modal}>
          <div className={classes["modal__overlay"]} onClick={toggle}></div>

          <div className={classes["modal__window"]}>
            <button className={classes["modal__close"]} onClick={toggle}>
              <Icon src="/close-line.svg" />
            </button>
            {props.children}
          </div>
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  );
}
export default Modal;
