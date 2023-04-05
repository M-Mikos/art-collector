import { ARTWORKS_URL_LARGE_SUFFIX, IIIF_URL } from "../../../config";
import Actions from "./Actions";
import classes from "./Banner.module.css";

function Banner(props) {
  console.log(props);
  return (
    <div
      className={classes.banner}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(25, 24, 29, 1) 0%, rgba(25, 24, 29, 1) 50%, rgba(25, 24, 29,0.8) 100%), url("${IIIF_URL}/${props.thumbnail}${ARTWORKS_URL_LARGE_SUFFIX}")`,
      }}
    >
      <h1>{props.collection.title}</h1>
      <p>ID: {props.collection.id}</p>
      <p>Description: {props.collection.description}</p>
      <p>Items number: {props.items.length}</p>
      <Actions
        collectionId={props.collection.id}
        currentTitle={props.collection.title}
        currentDescription={props.collection.description}
      />
    </div>
  );
}

export default Banner;
