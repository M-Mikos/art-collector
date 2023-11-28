import { Link } from "react-router-dom";
import classes from "./Terms.module.css";

/**
 * Presentation component for displaying terms component.
 *
 * @param {Object} props
 * @param {string} props.terms artwork title.
 * @returns JSX code with terms component.
 */

function Terms(props) {
  const { terms } = props;
  return (
    <ul className={classes.terms}>
      {terms.map((term, i) => {
        return (
          <li key={i}>
            <Link to={`/search?q=${term}`}>{term}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Terms;
