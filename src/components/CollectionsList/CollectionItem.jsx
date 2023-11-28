import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ARTWORKS_URL_THUMBNAIL_SUFFIX, IIIF_URL } from "../../../config";
import Actions from "../Collection/Actions";
import classes from "./CollectionItem.module.css";

/**
 * Component for displaying collection item
 * @param {Object} props
 * @param {Object} props.thumbnail collection thubnail image data
 * @param {Object} props.data collection data
 * @returns JSX code with Collection component.
 */

const CollectionItem = (props) => {
  console.log("Rendering Collection");
  const { id, title, description, artworks } = props.data;
  const [isHovered, setIsHovered] = useState(false);

  const mouseEnterHandler = () => {
    setIsHovered(true);
  };

  const mouseLeaveHandler = () => {
    setIsHovered(false);
  };

  const thumbnailStyle = {
    backgroundImage: props.thumbnail?.src
      ? `url("${IIIF_URL}/${props.thumbnail.src}${ARTWORKS_URL_THUMBNAIL_SUFFIX}")`
      : "none",
  };

  const thumbnailClasses = `${classes.thumbnail} ${
    isHovered ? classes["thumbnail--highlighted"] : ""
  }`;
  const detailsClasses = `${classes.details} ${
    isHovered ? classes["details--highlighted"] : ""
  }`;
  const actionClasses = `${classes["actions__wrap"]} ${
    isHovered ? "" : classes["actions__wrap--hidden"]
  }`;

  return (
    <article
      className={classes["collection-item"]}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <Link to={id}>
        <div style={thumbnailStyle} className={thumbnailClasses} />
      </Link>

      <div className={detailsClasses}>
        <Link to={id}>
          <h2>{title}</h2>
        </Link>
        <p className={classes["details__info"]}>
          {artworks.length === 0
            ? "Empty collection."
            : `Number of artworks: ${artworks.length}`}
        </p>
        <div className={actionClasses}>
          <Actions
            collectionId={id}
            currentTitle={title}
            currentDescription={description}
          />
        </div>
      </div>
    </article>
  );
};

export default CollectionItem;
