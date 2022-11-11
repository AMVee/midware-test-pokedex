import "./SearchBar.css";
import searchIcon from "./assets/searchIcon.png";

import { useRef, useState } from "react";

function SearchBar(props) {
  const [showBar, setShowBar] = useState(false);

  const theSearchBox = useRef(null);

  function handleChange(e) {
    props.handleChange(e.target.value);
  }

  function handleIconClick() {
    setShowBar((currentShowBar) => {
      if (!currentShowBar) {
        theSearchBox.current.focus();
      }
      return !currentShowBar;
    });
  }

  const searchBarValue = props.searchBarValue;

  let SearchBarBoxClassName = "SearchBar-Box";
  if (!showBar) {
    SearchBarBoxClassName += " BarInvisible";
  }

  return (
    <div className="SearchBar-container">
      <img
        src={searchIcon}
        className="SearchBar-Icon"
        onClick={handleIconClick}
        title="search"
      />
      <input
        type="text"
        name="searchBox"
        value={searchBarValue}
        onChange={handleChange}
        className={SearchBarBoxClassName}
        ref={theSearchBox}
      />
    </div>
  );
}

export default SearchBar;
