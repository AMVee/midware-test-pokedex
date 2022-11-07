import "./SearchBar.css";

import { useState } from "react";

function SearchBar(props) {
  function handleChange(e) {
    props.handleChange(e.target.value);
  }

  const searchBarValue = props.searchBarValue;

  return (
    <div className="SearchBar-container">
      <input
        type="text"
        name="name"
        className="searchbar"
        value={searchBarValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
