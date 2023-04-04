import { IIIF_URL } from "../../../config";
import Actions from "../Artwork/Actions";
import classes from "./ArtworkThumbnail.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function ArtworkThumbnail(props) {
  return (
    <article>
      <div className={classes["image__wrap"]}>
        <Link to={`/${props.data.id}`} state={location.pathname}>
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
          <h3>{props.data.title}</h3>
        </Link>

        <span> {props.data["date_display"]}</span>
      </div>
    </article>
  );
}

export default ArtworkThumbnail;
