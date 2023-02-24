import classes from "./ModalPopup.module.css";

function ModalPopup(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.modal}>
          <div className={overlayClasses()} onClick={() => goBack()}></div>

          <div className={classes["modal__window"]}>
            <button
              className={classes["modal__close"]}
              onClick={() => goBack()}
            />
            {props.children}
          </div>
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  );
}
export default ModalPopup;
