import "./MidwarePokedex.css";

import PokedexList from "./PokedexList/PokedexList";
import PokedexScreen from "./PokedexScreen/PokedexScreen";
import { useState, useEffect } from "react";

import axios from "axios";

function MidwarePokedex() {
  const [selectedPokemon, setSelectedPokemon] = useState("loading");

  function handleEntryClick(newPokemonID) {
    let newPokemonURL = "https://pokeapi.co/api/v2/pokemon/" + newPokemonID;

    axios
      .get(newPokemonURL)
      .then((response) => setSelectedPokemon(response.data));
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
      <PokedexList
        selectedPokemon={selectedPokemon}
        handleClick={handleEntryClick}
      />
      <PokedexScreen selectedPokemon={selectedPokemon} />
    </div>
  );
}

export default MidwarePokedex;
