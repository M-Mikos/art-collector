import { Link } from "react-router-dom";
import classes from "./Title.module.css";

function Title(props) {
  return (
    <div className={classes.wrapper}>
      <h1>{props.title}</h1>
      <div className={classes.credentials}>
        <Link to={`/search?q=${props.artist}`} state={location.pathname}>
          {props.artist}
        </Link>
        , {props.date}
      </div>
    </div>
  );
}

export default Title;
