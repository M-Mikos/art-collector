import { useRef, useState } from "react";
import { Form } from "react-router-dom";
import Icon from "../UI/Icon";
import classes from "./SearchBar.module.css";

/**
 * Component for displaying and controlling searchbar.
 * @returns JSX code with searchBar component.
 */

function SearchBar() {
  const [isSearchBar, setIsSearchBar] = useState(false);
  const searchRef = useRef(null);

  const toggleSearchbar = () => {
    isSearchBar ? searchRef.current.blur() : searchRef.current.focus();
    setIsSearchBar((prev) => !prev);
  };

  return (
    <div className={classes.searchbar__wrapper}>
      <Form
        className={`${classes.searchbar} ${isSearchBar ? "" : classes.hidden}`}
        action="/search"
      >
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
        className={classes.searchbar__button}
        onClick={toggleSearchbar}
        aria-label="Search artworks"
      >
        <Icon src="/search-line.svg" />
      </button>
    </div>
  );
}

export default SearchBar;
