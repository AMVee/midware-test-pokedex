import "./PokedexScreen.css";

function PokedexScreen(props) {
  const pokemonImageURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
    props.selectedPokemon.id +
    ".png";

  return (
    <div className="PokedexScreen-container">
      <img src={pokemonImageURL} />
    </div>
  );
}

export default PokedexScreen;