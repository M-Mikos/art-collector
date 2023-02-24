import Logo from "./Logo";
import SearchBar from "./SearchBar";

import classes from "./Index.module.css";
import MainNavigation from "./MainNavigation";

function Header() {
  return (
    <header className={classes.header}>
      <Logo />
      <SearchBar />
      <MainNavigation />
    </header>
  );
}

export default Header;
