import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import classes from "./SearchBar.module.css";

function SearchBar() {
  return (
    <Form action="/search">
      <input
        id="q"
        type="text"
        name="q"
        required
        placeholder="Search artworks"
      />
      <button type="submit">Search</button>
    </Form>
  );
}

export default SearchBar;
