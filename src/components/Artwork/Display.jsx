import { useDispatch } from "react-redux";
import { ARTWORKS_URL_DEFAULT_SUFFIX, IIIF_URL } from "../../../config";
import classes from "./Display.module.css";
import { uiActions } from "../../store/ui-slice";

function Display(props) {
  const dispatch = useDispatch();

  const zoomImg = () => {
    dispatch(
      uiActions.toggleModal({
        mode: "lightbox",
        imgId: props.imgId,
      })
    );
  };

  return (
    <div className={classes["main-image__wrap"]}>
      <img
        alt={props.altText}
        src={`${IIIF_URL}/${props.imgId}${ARTWORKS_URL_DEFAULT_SUFFIX}`}
        className={classes["main-image"]}
        onClick={zoomImg}
      />
    </div>
  );
}

export default Display;
