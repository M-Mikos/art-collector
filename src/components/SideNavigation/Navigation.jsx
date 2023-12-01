import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import NavigationLink from "./NavigationLink";
import NavigationButton from "./NavigationButton";
import classes from "./Navigation.module.css";

/**
 * Component for displaying sidebar navigation.
 *
 * @returns JSX code with sidebar navigation.
 */

function Navigation() {
  const dispatch = useDispatch();

  const toggleAdd = () => {
    dispatch(
      uiActions.toggleModal({
        mode: "add",
      })
    );
  };

  return (
    <nav className={classes["site-nav"]}>
      <NavigationLink to="/" iconSrc="/home-line.svg" label="Home" />
      <NavigationLink
        to="/favourites"
        iconSrc="/heart-line.svg"
        label="Favourites"
      />
      <NavigationLink
        to="/collections"
        iconSrc="/image-2-line.svg"
        label="Collections"
      />
      <NavigationButton
        onClick={toggleAdd}
        iconSrc="/add-line.svg"
        label="Create collection"
      />
    </nav>
  );
}

export default Navigation;
