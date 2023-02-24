import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import classes from "./ModalPage.module.css";

function ModalPage(props) {
  const navigate = useNavigate();

  // Preventing: leaving app upon closing modal
  const goBack = () => {
    if (props.prevPath === null) return navigate("/");
    return navigate(-1);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.modal}>
          <div className={classes["modal__overlay"]} onClick={goBack()}></div>

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
export default ModalPage;
