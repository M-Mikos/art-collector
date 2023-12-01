import classes from "./Icon.module.css";

/**
 * Presentation component for displaying icon.
 *
 * @param {Object} props
 * @param {string} props.alt icon alt text
 * @param {string} props.src icon source path
 * @returns JSX code with icon element.
 */

function Icon(props) {
  const { alt, src } = props;
  return (
    <div className={classes["icon__wrap"]}>
      <img alt={alt ? alt : ""} src={src} />
    </div>
  );
}
export default Icon;
