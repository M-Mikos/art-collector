import { useState } from "react";
import {
  ARTWORKS_URL_LARGE_SUFFIX,
  IIIF_URL,
  LIGHTBOX_ZOOM_LEVEL,
} from "../../../config";
import classes from "./Lightbox.module.css";

/**
 * Component for displaying artwork image lightbox with zoom feature activated on click.
 *
 * @param {Object} props
 * @param {string} props.id artwork ID
 * @returns JSX code with Details component.
 */

function Lightbox(props) {
  const { imgId } = props;
  const [imagePositionX, setImagePositionX] = useState();
  const [imagePositionY, setImagePositionY] = useState();
  const [isZoomed, setIsZommed] = useState(false);

  const zoomHandler = () => {
    setIsZommed((prevState) => !prevState);
  };

  const moveHandler = (event) => {
    if (!isZoomed) return;
    const x = event.clientX - event.target.x;
    const y = event.clientY - event.target.y;

    const percentageX = -(
      Math.floor((x / event.target.width) * 1000) / 10 -
      50
    );
    const percentageY = -(
      Math.floor((y / event.target.height) * 1000) / 10 -
      50
    );
    if (
      x > event.target.width / (LIGHTBOX_ZOOM_LEVEL * 2) &&
      x <
        (event.target.width * (LIGHTBOX_ZOOM_LEVEL * 2 - 1)) /
          (LIGHTBOX_ZOOM_LEVEL * 2)
    ) {
      setImagePositionX(percentageX);
    }
    if (
      y > event.target.height / (LIGHTBOX_ZOOM_LEVEL * 2) &&
      y <
        (event.target.height * (LIGHTBOX_ZOOM_LEVEL * 2 - 1)) /
          (LIGHTBOX_ZOOM_LEVEL * 2)
    ) {
      setImagePositionY(percentageY);
    }
  };

  return (
    <div className={classes.lightbox__wrapper}>
      <img
        src={`${IIIF_URL}/${imgId}${ARTWORKS_URL_LARGE_SUFFIX}`}
        className={
          isZoomed
            ? `${classes.lightbox__image} ${classes.zoom}`
            : classes.lightbox__image
        }
        style={
          isZoomed
            ? {
                transform: `scale(${LIGHTBOX_ZOOM_LEVEL}) translate(${imagePositionX}%, ${imagePositionY}%)`,
              }
            : { transform: `translate(0%, 0%)` }
        }
        onClick={zoomHandler}
        onMouseMove={moveHandler}
      />
    </div>
  );
}

export default Lightbox;
