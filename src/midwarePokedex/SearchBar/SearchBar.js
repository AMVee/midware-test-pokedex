import "./SearchBar.css";
import searchIcon from "./assets/searchIcon.png";

import { useState } from "react";

function SearchBar(props) {
  const [showBar, setShowBar] = useState(false);

  function handleChange(e) {
    props.handleChange(e.target.value);
  }

  function handleIconClick() {
    setShowBar(!showBar);
  }

  const searchBarValue = props.searchBarValue;

  let SearchBarBoxClassName = "SearchBar-Box";
  if (!showBar) {
    SearchBarBoxClassName += " BarInvisible";
  }

  let SearchBarIconClassName = "SearchBar-Icon";
  if (!showBar) {
    SearchBarBoxClassName += " SearchBarIconCollapsed";
  }

  return (
    <div className="SearchBar-container">
      <img
        src={searchIcon}
        className={SearchBarIconClassName}
        onClick={handleIconClick}
      />
      <input
        type="text"
        name="name"
        value={searchBarValue}
        onChange={handleChange}
        className={SearchBarBoxClassName}
      />
    </div>
  );
}

export default SearchBar;
