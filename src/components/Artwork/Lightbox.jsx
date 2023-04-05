import { ARTWORKS_URL_DEFAULT_SUFFIX, IIIF_URL } from "../../../config";
import classes from "./Lightbox.module.css";

function Lightbox(props) {
  return (
    <div className={classes["lightbox__wrapper"]}>
      <img
        className={classes["lightbox__image"]}
        src={`${IIIF_URL}/${props.imgId}${ARTWORKS_URL_DEFAULT_SUFFIX}`}
      />
    </div>
  );
}

export default Lightbox;
