import { Link } from "react-router-dom";

import classes from "./Terms.module.css";

function Terms(props) {
  return (
    <ul className={classes.terms}>
      {props.terms.map((term, i) => {
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
