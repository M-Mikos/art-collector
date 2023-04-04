import { IIIF_URL } from "../../../config";
import classes from "./Display.module.css";

function Display(props) {
  return (
    <div className={classes["main-image__wrap"]}>
      {" "}
      <img
        alt={props.altText}
        src={`${IIIF_URL}/${props.imgId}/full/843,/0/default.jpg`}
        className={classes["main-image"]}
      />
    </div>
  );
}

export default Display;
