import { useState } from "react";
import { ARTWORKS_URL_LARGE_SUFFIX, IIIF_URL } from "../../../config";
import classes from "./Lightbox.module.css";

/**
 * Component for displaying artwork image lightbox with zoom feature activated on click.
 *
 * @param {Object} props
 * @param {string} props.id artwork ID
 * @returns JSX code with Details component.
 */

function Lightbox(props) {
  const [imagePositionX, setImagePositionX] = useState();
  const [imagePositionY, setImagePositionY] = useState();
  const [isZoomed, setIsZommed] = useState(false);

  const zoomHandler = () => {
    setIsZommed((prevState) => !prevState);
  };

  const moveHandler = (event) => {
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

    if (x > event.target.width / 6 && x < (event.target.width * 5) / 6) {
      setImagePositionX(percentageX);
    }
    if (y > event.target.height / 6 && y < (event.target.height * 5) / 6) {
      setImagePositionY(percentageY);
    }
  };

  return (
    <div className={classes.lightbox__wrapper}>
      <img
        src={`${IIIF_URL}/${props.imgId}${ARTWORKS_URL_LARGE_SUFFIX}`}
        className={
          isZoomed
            ? `${classes.lightbox__image} ${classes.zoom}`
            : classes.lightbox__image
        }
        style={
          isZoomed
            ? {
                transform: `scale(3) translate(${imagePositionX}%, ${imagePositionY}%)`,
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
