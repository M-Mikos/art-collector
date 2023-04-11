import classes from "./TitleBanner.module.css";

function TitleBanner(props) {
  return (
    <div className={classes.banner}>
      <h1>{props.title}</h1>
      {props.subtitle && <span> {props.subtitle} </span>}
    </div>
  );
}

export default TitleBanner;
