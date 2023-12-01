import { memo } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import classes from "./Index.module.css";
/**
 * Presentation component for displaying application header
 * @returns JSX code with header component.
 */

const Header = memo(function Header() {
  return (
    <header className={classes.header}>
      <Logo />
      <SearchBar />
    </header>
  );
});

export default Header;
