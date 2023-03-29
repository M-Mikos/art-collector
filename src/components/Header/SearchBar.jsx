import { useRef, useState } from "react";
import { Form } from "react-router-dom";
import Icon from "../UI/Icon";
import classes from "./SearchBar.module.css";

function SearchBar() {
  const [isSearchBar, setIsSearchBar] = useState(false);
  const searchRef = useRef(null);

  const classList = isSearchBar
    ? classes.searchbar
    : classes.searchbar + " " + classes.hidden;

  const toggleSearchbar = () => {
    isSearchBar ? searchRef.current.blur() : searchRef.current.focus();
    setIsSearchBar((prev) => !prev);
  };

  return (
    <div className={classes["searchbar__wrapper"]}>
      <Form className={classList} action="/search">
        <input
          id="q"
          type="text"
          name="q"
          required
          placeholder="Search artworks"
          ref={searchRef}
        />
      </Form>
      <button
        className={classes["searchbar__button"]}
        onClick={toggleSearchbar}
      >
        <Icon src="src/assets/icons/search-line.svg" />
      </button>
    </div>
  );
}

export default SearchBar;
