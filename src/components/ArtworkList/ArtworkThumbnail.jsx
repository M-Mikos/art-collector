import { IIIF_URL } from "../../../config";
import Actions from "../Artwork/Actions";
import classes from "./ArtworkThumbnail.module.css";
import { Link } from "react-router-dom";

function ArtworkThumbnail(props) {
  return (
    <article>
      <Link to={`/${props.data.id}`} state={location.pathname}>
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
      </Link>

      <Actions id={props.data.id} />
    </article>
  );
}

export default ArtworkThumbnail;
