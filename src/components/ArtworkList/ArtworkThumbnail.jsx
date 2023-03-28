import { IIIF_URL } from "../../../config";
import Actions from "../Artwork/Actions";
import classes from "./ArtworkThumbnail.module.css";
import { Link } from "react-router-dom";

function ArtworkThumbnail(props) {
  return (
    <article>
      <Link to={`/${props.data.id}`} state={location.pathname}>
        <div className={classes["image-wrap"]}>
          <div className={classes.image}>
            {props.data.image_id ? (
              <img
                alt={props.data.title}
                src={`${IIIF_URL}/${props.data.image_id}/full/400,/0/default.jpg`}
              />
            ) : (
              <div className={classes["placeholder__wrap"]}>
                <img
                  className={classes.placeholder}
                  alt="No image avaliable."
                  src={"src/assets/icons/image-unavaliable-line.svg"}
                />
              </div>
            )}
          </div>
        </div>

        <div>
          <h3>{props.data.title}</h3>
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
