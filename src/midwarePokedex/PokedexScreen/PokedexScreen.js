import EvolutionChart from "./EvolutionChart/EvolutionChart";
import "./PokedexScreen.css";
import PokemonDisplay from "./PokemonDisplay/PokemonDisplay";

function PokedexScreen(props) {
  let pokemonImageURL;
  if (props.selectedPokemon.id) {
    pokemonImageURL =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
      props.selectedPokemon.id +
      ".png";
  }

  return (
    <div className="PokedexScreen-container">
      <PokemonDisplay selectedPokemon={props.selectedPokemon} />
      <EvolutionChart selectedPokemon={props.selectedPokemon} />
    </div>
  );
}

export default PokedexScreen;
