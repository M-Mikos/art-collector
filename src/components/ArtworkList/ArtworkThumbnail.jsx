import { ARTWORKS_URL_THUMBNAIL_SUFFIX, IIIF_URL } from "../../../config";
import { Link } from "react-router-dom";
import Actions from "../Artwork/Actions";
import classes from "./ArtworkThumbnail.module.css";

/**
 * Presentation component for displaying artwork thumbnail.
 * @param {Object} props
 * @param {string} props.id artwork ID.
 * @param {string} props.imageId artwork image ID.
 * @param {string} props.title artwork title.
 * @param {string} props.artistTitle artwork author.
 * @param {string} props.dateDisplay artwork creation date.
 * @returns JSX code with  ArtworkThumbnail component.
 */

function ArtworkThumbnail(props) {
  console.log("Rendering Artwork Thumbnail");
  const { id, imageId, title, artistTitle, dateDisplay } = props;

  console.log(classes);

  const renderImage = () => {
    if (imageId) {
      return (
        <img
          className={classes.image}
          alt={title}
          src={`${IIIF_URL}/${imageId}${ARTWORKS_URL_THUMBNAIL_SUFFIX}`}
        />
      );
    } else {
      return (
        <div className={classes.placeholder__wrap}>
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
      <div className={classes.image__wrap}>
        <Link to={`/${id}`} state={location.pathname}>
          <div className={classes.image__container}>{renderImage()}</div>
        </Link>
      </div>
      <Actions id={id} />
      <div className={classes.description__wrap}>
        <Link to={`/search?q=${artistTitle}`} state={location.pathname}>
          <span className={classes.description__author}>{artistTitle}</span>
        </Link>

        <Link to={`/${id}`} state={location.pathname}>
          <h2>{title}</h2>
        </Link>

        <span>{dateDisplay}</span>
      </div>
    </article>
  );
}

export default ArtworkThumbnail;
