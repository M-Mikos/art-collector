import { ARTWORKS_URL, IIIF_URL } from "../../../config";
import classes from "./Details.module.css";

function Details(props) {
  const data = Object.entries(props.data);
  return (
    <div className={classes["details__wrap"]}>
      <div className={classes["details__list"]}>
        <ul>
          {data.map((item) => {
            return (
              <li key={item[0]}>
                <span className={classes["details__list__prop"]}>
                  {item[0]}:{" "}
                </span>
                <span className={classes["details__list__value"]}>
                  {item[1]}
                </span>
              </li>
            );
          })}
          <li>
            <span className={classes["details__list__prop"]}>
              Read more at:{" "}
            </span>
            <span className={classes["details__list__value"]}>
              <a
                href={`${ARTWORKS_URL}${props.data.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Art Institute of Chicago
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div className={classes["details__image"]}>
        <img
          alt={props.altText}
          src={`${IIIF_URL}/${props.imgId}/full/400,/0/default.jpg`}
        />
      </div>
    </div>
  );
}

export default Details;
