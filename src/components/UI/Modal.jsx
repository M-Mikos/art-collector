import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.modal}>
          <div
            className={classes["modal__overlay"]}
            onClick={props.close}
          ></div>

          <div className={classes["modal__window"]}>
            <button className={classes["modal__close"]} onClick={props.close} />
            {props.children}
          </div>
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  );
}
export default Modal;
