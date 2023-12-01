import { ARTWORKS_URL_LARGE_SUFFIX, IIIF_URL } from "../../../config";
import Actions from "./Actions";
import classes from "./Banner.module.css";

/**
 * Presentational component for displaying collection banner.
 * @param {Object} props
 * @param {Object[]} props.items collection artworks
 * @param {Object} props.collection collection details
 * @param {string} props.message optional error/information message
 * @returns JSX code with Collection component.
 */

function Banner(props) {
  const { thumbnail, description, title, id, count } = props;
  return (
    <div
      className={classes.banner}
      style={
        props.thumbnail && {
          backgroundImage: `linear-gradient(to right, rgba(25, 24, 29, 1) 0%, rgba(25, 24, 29, 1) 50%, rgba(25, 24, 29,0.6) 100%), url("${IIIF_URL}/${thumbnail}${ARTWORKS_URL_LARGE_SUFFIX}")`,
        }
      }
    >
      <h1>{title}</h1>
      {description && (
        <p>
          Description: <br /> {description}
        </p>
      )}
      <p>Number of artworks: {count}</p>
      <Actions id={id} title={title} description={description} />
    </div>
  );
}

export default Banner;
