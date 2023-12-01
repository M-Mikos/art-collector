import Icon from "../UI/Icon";
import classes from "./NavigationButton.module.css";

/**
 * Presentation component for displaying navigation button.
 *
 * @param {Object} props
 * @param props.onClick button click function
 * @param {string} props.iconSrc icon source path
 * @param {string} props.label link label text
 * @returns JSX code with navigation button component.
 */

function NavigationButton(props) {
  const { onClick, iconSrc, label } = props;
  return (
    <button className={classes.button} onClick={onClick}>
      <Icon src={iconSrc} />
      <span>{label}</span>
    </button>
  );
}

export default NavigationButton;
