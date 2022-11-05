import "./PokedexList.css";

function PokedexList(props) {
  return (
    <div className="PokedexList-container">{props.selectedPokemon.name}</div>
  );
}

export default PokedexList;
