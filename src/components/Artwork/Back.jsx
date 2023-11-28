import { useNavigate } from "react-router-dom";
import Icon from "../UI/Icon";

/**
 * Component for displaying back button.
 *
 * @param {Object} props
 * @param {string} props.path previous page path.
 * @returns JSX code with Details component.
 */

function Back(props) {
  const { path } = props.path;
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(path);
  };

  return (
    <button onClick={clickHandler}>
      <Icon src="/arrow-left-line.svg" /> <span>Back</span>
    </button>
  );
}

export default Back;
