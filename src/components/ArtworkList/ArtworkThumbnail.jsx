import { ARTWORKS_URL_THUMBNAIL_SUFFIX, IIIF_URL } from "../../../config";
import Actions from "../Artwork/Actions";
import classes from "./ArtworkThumbnail.module.css";
import { Link } from "react-router-dom";

function ArtworkThumbnail(props) {
  return (
    <article className={classes.artwork}>
      <div className={classes["image__wrap"]}>
        <Link to={`/${props.data.id}`} state={location.pathname}>
          <div className={classes["image__container"]}>
            {props.data.image_id ? (
              <img
                className={classes.image}
                alt={props.data.title}
                src={`${IIIF_URL}/${props.data.image_id}${ARTWORKS_URL_THUMBNAIL_SUFFIX}`}
              />
            ) : (
              <div className={classes["placeholder__wrap"]}>
                <img
                  className={classes.placeholder}
                  alt="No image available."
                  src={"/image-unavaliable-line.svg"}
                />
              </div>
            )}
          </div>
        </Link>
      </div>
      <Actions id={props.data.id} />
      <div className={classes["description__wrap"]}>
        <Link
          to={`/search?q=${props.data["artist_title"]}`}
          state={location.pathname}
        >
          <span className={classes["description__author"]}>
            {props.data["artist_title"]}
          </span>
        </Link>

        <Link to={`/${props.data.id}`} state={location.pathname}>
          <h2>{props.data.title}</h2>
        </Link>

        <span> {props.data["date_display"]}</span>
      </div>
    </article>
  );
}

export default ArtworkThumbnail;
