import "./SearchBar.css";

import { useState } from "react";

function SearchBar(props) {
  function handleChange() {
    props.handleChange();
  }

  return (
    <div className="SearchBar-container">
      <input
        type="text"
        name="name"
        className="searchbar"
        value={props.searchBarValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
