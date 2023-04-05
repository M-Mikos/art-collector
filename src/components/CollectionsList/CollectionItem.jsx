import { Link } from "react-router-dom";
import { ARTWORKS_URL_THUMBNAIL_SUFFIX, IIIF_URL } from "../../../config";
import Actions from "../Collection/Actions";
import classes from "./CollectionItem.module.css";
import { useState } from "react";

function Collection(props) {
  const [actionClasses, setActionClasses] = useState(
    `${classes["actions__wrap"]} ${classes["actions__wrap--hidden"]}`
  );
  const [thumbnailClasses, setThumbnailClasses] = useState(classes.thumbnail);
  const [detailsClasses, setDetailsClasses] = useState(classes.details);

  const mouseEnterHandler = () => {
    setActionClasses(classes["actions__wrap"]);
    setThumbnailClasses(
      `${classes.thumbnail} ${classes["thumbnail--highlighted"]}`
    );
    setDetailsClasses(`${classes.details} ${classes["details--highlighted"]}`);
  };

  const mouseLeaveHandler = () => {
    setActionClasses(
      `${classes["actions__wrap"]} ${classes["actions__wrap--hidden"]}`
    );
    setThumbnailClasses(classes.thumbnail);
    setDetailsClasses(classes.details);
  };

  return (
    <article
      className={classes["collection-item"]}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <Link to={props.data.id}>
        <div
          style={{
            backgroundImage: `url("${IIIF_URL}/${props.thumbnail}${ARTWORKS_URL_THUMBNAIL_SUFFIX}")`,
          }}
          className={thumbnailClasses}
        />
      </Link>

      <div className={detailsClasses}>
        <Link to={props.data.id}>
          <h2>{props.data.title}</h2>
        </Link>
        <div className={actionClasses}>
          <Actions
            collectionId={props.data.id}
            currentTitle={props.data.title}
            currentDescription={props.data.description}
          />
        </div>
      </div>
    </article>
  );
}

export default Collection;
