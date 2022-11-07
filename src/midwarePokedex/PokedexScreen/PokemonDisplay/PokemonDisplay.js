import "./PokemonDisplay.css";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

function PokemonDisplay(props) {
  return (
    <div className="PokemonDisplay-container">
      <LeftSide selectedPokemon={props.selectedPokemon} />
      <RightSide selectedPokemon={props.selectedPokemon} />
    </div>
  );
}

export default PokemonDisplay;
