import { Link } from "react-router-dom";

function Back(props) {
  return (
    <button>
      <Link to={props.path}>Back</Link>
    </button>
  );
}

export default Back;
