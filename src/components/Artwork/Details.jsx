import { ARTWORKS_URL, IIIF_URL } from "../../../config";
import classes from "./Details.module.css";

/**
 * Component for displaying artwork details component.
 * Component contains event callback function which dispaches action on UI state for opening modal in lightbox mode (for zooming image on click)
 *
 * @param {Object} props
 * @param {Object} props.data artwork detailed informations.
 * @param {string} props.imgId artwork image id.
 * @param {string} props.altText artwork image alt text.
 * @returns JSX code with Details component.
 */

function Details(props) {
  const { data, altText, imgId } = props;
  const artworkData = Object.entries(data);
  return (
    <div className={classes.details__wrap}>
      <div className={classes.details__list}>
        <ul>
          {artworkData.map((item) => {
            return (
              <li key={item[0]}>
                <span className={classes.details__list__prop}>{item[0]}: </span>
                <span className={classes.details__list__value}>{item[1]}</span>
              </li>
            );
          })}
          <li>
            <span className={classes.details__list__prop}>Read more at: </span>
            <span className={classes.details__list__value}>
              <a
                href={`${ARTWORKS_URL}${data.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Art Institute of Chicago
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div className={classes.details__image}>
        <img
          alt={altText}
          src={`${IIIF_URL}/${imgId}/full/400,/0/default.jpg`}
        />
      </div>
    </div>
  );
}

export default Details;
