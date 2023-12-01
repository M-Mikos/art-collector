import { NavLink } from "react-router-dom";
import Icon from "../UI/Icon";
import classes from "./NavigationLink.module.css";

/**
 * Presentation component for displaying navigation link.
 *
 * @param {Object} props
 * @param {string} props.to link path
 * @param {string} props.iconSrc icon source path
 * @param {string} props.label link label text
 * @returns JSX code with navigation link component.
 */

function NavigationLink(props) {
  const { to, iconSrc, label } = props;

  return (
    <div className={classes.navlink}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : "")}
        to={to}
        end
      >
        <Icon src={iconSrc} />
        <span>{label}</span>
      </NavLink>
    </div>
  );
}

export default NavigationLink;
