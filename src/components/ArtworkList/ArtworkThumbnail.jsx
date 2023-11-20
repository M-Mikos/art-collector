import { ARTWORKS_URL_THUMBNAIL_SUFFIX, IIIF_URL } from "../../../config";
import Actions from "../Artwork/Actions";
import classes from "./ArtworkThumbnail.module.css";
import { Link } from "react-router-dom";

function ArtworkThumbnail(props) {
  const { data } = props;

  const renderImage = () => {
    if (data.image_id) {
      return (
        <img
          className={classes.image}
          alt={data.title}
          src={`${IIIF_URL}/${data.image_id}${ARTWORKS_URL_THUMBNAIL_SUFFIX}`}
        />
      );
    } else {
      return (
        <div className={classes["placeholder__wrap"]}>
          <img
            className={classes.placeholder}
            alt="No image available."
            src={"/image-unavailable-line.svg"}
          />
        </div>
      );
    }
  };

  return (
    <article className={classes.artwork}>
      <div className={classes["image__wrap"]}>
        <Link to={`/${data.id}`} state={location.pathname}>
          <div className={classes["image__container"]}>{renderImage()}</div>
        </Link>
      </div>
      <Actions id={data.id} />
      <div className={classes["description__wrap"]}>
        <Link
          to={`/search?q=${data["artist_title"]}`}
          state={location.pathname}
        >
          <span className={classes["description__author"]}>
            {data["artist_title"]}
          </span>
        </Link>

        <Link to={`/${data.id}`} state={location.pathname}>
          <h2>{data.title}</h2>
        </Link>

        <span>{data["date_display"]}</span>
      </div>
    </article>
  );
}

export default ArtworkThumbnail;
