import classes from "./TitleBanner.module.css";

function TitleBanner(props) {
  return (
    <div className={classes.banner}>
      <h1>{props.title}</h1>
      {props.itemsQuantity && (
        <span> Number of artworks: {props.itemsQuantity}</span>
      )}
    </div>
  );
}

export default TitleBanner;
