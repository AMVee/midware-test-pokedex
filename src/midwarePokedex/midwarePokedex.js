import "./MidwarePokedex.css";

import PokedexList from "./PokedexList/PokedexList";
import PokedexScreen from "./PokedexScreen/PokedexScreen";
import { useState, useEffect } from "react";

import axios from "axios";

function MidwarePokedex() {
  const [selectedPokemon, setSelectedPokemon] = useState("loading");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/vulpix")
      .then((response) => setSelectedPokemon(response.data));
  }, []);

  return (
    <div className="MidwarePokedex-container">
      <PokedexList selectedPokemon={selectedPokemon} />
      <PokedexScreen selectedPokemon={selectedPokemon} />
    </div>
  );
}

export default MidwarePokedex;
