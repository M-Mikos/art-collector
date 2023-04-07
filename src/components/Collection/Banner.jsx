import { ARTWORKS_URL_LARGE_SUFFIX, IIIF_URL } from "../../../config";
import Actions from "./Actions";
import classes from "./Banner.module.css";

function Banner(props) {
  return (
    <div
      className={classes.banner}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(25, 24, 29, 1) 0%, rgba(25, 24, 29, 1) 50%, rgba(25, 24, 29,0.6) 100%), url("${IIIF_URL}/${props.thumbnail}${ARTWORKS_URL_LARGE_SUFFIX}")`,
      }}
    >
      <h1>{props.collection.title}</h1>
      {props.collection.description && (
        <p>
          Description: <br /> {props.collection.description}
        </p>
      )}
      <p>Number of artworks: {props.items.length}</p>
      <Actions
        collectionId={props.collection.id}
        currentTitle={props.collection.title}
        currentDescription={props.collection.description}
      />
    </div>
  );
}

export default Banner;
