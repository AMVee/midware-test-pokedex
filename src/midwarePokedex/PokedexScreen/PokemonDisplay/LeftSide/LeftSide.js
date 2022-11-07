import "./LeftSide.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function LeftSide(props) {
  const { selectedPokemon = {} } = props;
  const { name = "", id = 0 } = selectedPokemon;
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.selectedPokemon.id}.png`;

  return (
    <div className="LeftSide-container">
      <img className="LeftSide-Image" src={imgURL} />
      <p className="LeftSide-Name">{capitalizeFirstLetter(name)}</p>
    </div>
  );
}

export default LeftSide;
