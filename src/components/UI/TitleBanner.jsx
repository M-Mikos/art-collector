import classes from "./TitleBanner.module.css";

/**
 * Presentation component for displaying title banner.
 *
 * @param props
 * @param {string} props.title title banner text
 * @param {string} props.subtitle subtitle banner text
 * @returns JSX code with TitleBanner element.
 */

function TitleBanner(props) {
  console.log("Rendering TitleBanner Component");
  const { title, subtitle } = props;
  return (
    <div className={classes.banner}>
      <h1>{title}</h1>
      {subtitle && <span>{subtitle}</span>}
    </div>
  );
}

export default TitleBanner;
