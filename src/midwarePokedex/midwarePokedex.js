import "./MidwarePokedex.css";

import PokedexList from "./PokedexList/PokedexList";
import PokedexScreen from "./PokedexScreen/PokedexScreen";
import SearchBar from "./SearchBar/SearchBar";

import { useState, useEffect } from "react";

import axios from "axios";

function MidwarePokedex() {
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [searchBarValue, setSearchBarValue] = useState("");

  function handleEntryClick(newPokemonID) {
    let newPokemonURL = "https://pokeapi.co/api/v2/pokemon/" + newPokemonID;

    axios
      .get(newPokemonURL)
      .then((response) => setSelectedPokemon(response.data));
  }

  function handleSearchBarChange(newValue) {
    setSearchBarValue(newValue);
  }

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/bulbasaur")
      .then((response) => {
        setSelectedPokemon(response.data);
      });
  }, []);

  return (
    <div className="MidwarePokedex-container">
      <SearchBar handleChange={handleSearchBarChange} />
      <PokedexList
        selectedPokemon={selectedPokemon}
        handleClick={handleEntryClick}
        searchBarValue={searchBarValue}
      />
      {selectedPokemon ? (
        <PokedexScreen selectedPokemon={selectedPokemon} />
      ) : (
        "loading"
      )}
    </div>
  );
}

export default MidwarePokedex;
