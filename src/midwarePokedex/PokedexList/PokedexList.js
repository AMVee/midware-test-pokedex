import "./PokedexList.css";

import { useEffect, useState } from "react";
import axios from "axios";

import PokemonListEntry from "./PokemonListEntry/PokemonListEntry";

function PokedexList(props) {
  const [listOfPokemon, setListOfPokemon] = useState("");

  function handleClick(pokeNum) {
    props.handleClick(pokeNum);
  }

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=904")
      .then((response) => {
        setListOfPokemon(
          response.data.results.map((pokemon, index) => {
            return (
              <PokemonListEntry
                pokemon={pokemon}
                key={index}
                selectedPokemon={props.selectedPokemon}
                pokeNum={index + 1}
                handleClick={handleClick}
                searchBarValue={props.searchBarValue}
              />
            );
          })
        );
      });
  }, [props.selectedPokemon, props.searchBarValue]);

  return <div className="PokedexList-container">{listOfPokemon}</div>;
}

export default PokedexList;
