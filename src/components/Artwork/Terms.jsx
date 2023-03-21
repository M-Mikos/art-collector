import { Link } from "react-router-dom";

function Terms(props) {
  return (
    <ul>
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
