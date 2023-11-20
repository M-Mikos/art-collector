import classes from "./Icon.module.css";

function Icon(props) {
  return (
    <div className={classes["icon__wrap"]}>
      <img alt={props.alt ? props.alt : ""} src={props.src} />
    </div>
  );
}
export default Icon;
