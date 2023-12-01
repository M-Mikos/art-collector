import AddToCollection from "./AddToCollection";
import AddToFavourites from "./AddToFavourites";
import classes from "./Actions.module.css";

/**
 * Component for displaying artwork actions bar.
 *
 * @param {Object} props
 * @param {string} props.id artwork ID
 * @returns JSX code with Actions component.
 */

function Actions(props) {
  const { id } = props;

  return (
    <div className={classes["actions-bar"]}>
      <AddToFavourites id={id} />
      <AddToCollection id={id} />
    </div>
  );
}

export default Actions;
