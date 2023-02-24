import { IIIF_URL } from "../../../config";
import classes from "./ArtworkThumbnail.module.css";

function ArtworkThumbnail(props) {
  return (
    <article>
      <div className={classes.image}>
        <img
          alt=""
          src={`${IIIF_URL}/${props.data.image_id}/full/400,/0/default.jpg`}
        />
      </div>
      <div>
        <h2>{props.data.title}</h2>
        <span>
          {props.data["artist_title"]}, {props.data["date_display"]}
        </span>
      </div>
    </article>
  );
}

export default ArtworkThumbnail;
