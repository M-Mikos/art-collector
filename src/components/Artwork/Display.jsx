import { useDispatch } from "react-redux";
import { ARTWORKS_URL_DEFAULT_SUFFIX, IIIF_URL } from "../../../config";
import { uiActions } from "../../store/ui-slice";
import classes from "./Display.module.css";

/**
 * Component for displaying artwork media component.
 * Component contains event callback function which dispaches action on UI state for opening modal in lightbox mode (for zooming image on click)
 *
 * @param {Object} props
 * @param {string} props.imgId artwork image id.
 * @param {string} props.altText artwork image alt text.
 * @returns JSX code with Display component.
 */

function Display(props) {
  const { imgId, altText } = props;
  const dispatch = useDispatch();

  const zoomImg = () => {
    dispatch(
      uiActions.toggleModal({
        mode: "lightbox",
        imgId,
      })
    );
  };

  return (
    <div className={classes["main-image__wrap"]}>
      <img
        alt={altText}
        src={`${IIIF_URL}/${imgId}${ARTWORKS_URL_DEFAULT_SUFFIX}`}
        className={classes["main-image"]}
        onClick={zoomImg}
      />
    </div>
  );
}

export default Display;
