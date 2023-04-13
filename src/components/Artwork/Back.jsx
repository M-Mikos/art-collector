import { Link, useNavigate } from "react-router-dom";
import Icon from "../UI/Icon";

function Back(props) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(props.path);
  };

  return (
    <button onClick={clickHandler}>
      <Icon src="/arrow-left-line.svg" /> <span>Back</span>
    </button>
  );
}

export default Back;
