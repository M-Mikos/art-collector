import classes from "./Card.module.css";

/**
 * Presentation component for displaying card wrapper.
 *
 * @param {Object} props
 * @param props.children elements passed inside Card tag
 * @returns JSX code with card element wrapped around children prop.
 */

function Card(props) {
  console.log("Rendering Card Component");
  const { children } = props;

  return <div className={classes.card}>{children}</div>;
}
export default Card;
