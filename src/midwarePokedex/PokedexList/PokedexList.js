import "./PokedexList.css";

import { useEffect, useState } from "react";
import axios from "axios";

import PokemonListEntry from "./PokemonListEntry/PokemonListEntry";

function PokedexList(props) {
  const [listOfPokemon, setListOfPokemon] = useState("");
  const [batchNumber, setBatchNumber] = useState(1);

  function startNextBatch() {
    setBatchNumber(batchNumber + 1);
  }

  useEffect(() => {
    if (batchNumber <= 3) {
      let currentInterval = setInterval(startNextBatch, 2000);
      return () => {
        clearInterval(currentInterval);
      };
    }
  }, [batchNumber]);

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
                batchNumber={batchNumber}
              />
            );
          })
        );
      });
  }, [props.selectedPokemon, props.searchBarValue, batchNumber]);

  return <div className="PokedexList-container">{listOfPokemon}</div>;
}

export default PokedexList;
