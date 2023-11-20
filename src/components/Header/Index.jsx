import Logo from "./Logo";
import SearchBar from "./SearchBar";

import classes from "./Index.module.css";
function Header() {
  return (
    <header className={classes.header}>
      <Logo />
      <SearchBar />
    </header>
  );
}

export default Header;
