import { Link } from "react-router-dom";
import classes from "./Title.module.css";

/**
 * Presentation component for displaying title component.
 *
 * @param {Object} props
 * @param {string} props.title artwork title.
 * @param {string} props.artist artwork artist.
 * @param {string} props.date artwork creation date.
 * @returns JSX code with Title component.
 */

function Title(props) {
  console.log("Rendering Title");
  const { title, artist, date } = props;
  return (
    <div className={classes.wrapper}>
      <h1>{title}</h1>
      <div className={classes.credentials}>
        <Link to={`/search?q=${artist}`} state={location.pathname}>
          {artist}
        </Link>
        , {date}
      </div>
    </div>
  );
}

export default Title;
