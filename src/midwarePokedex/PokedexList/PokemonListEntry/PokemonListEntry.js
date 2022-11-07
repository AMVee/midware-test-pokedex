import "./PokemonListEntry.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function addLeadingZeros(num) {
  return String(num).padStart(3, "0");
}

function PokemonListEntry(props) {
  function handleClick() {
    props.handleClick(props.pokeNum);
  }

  let thisEntryContainerClassname = "PokemonListEntry-container";

  if (props.selectedPokemon.name == props.pokemon.name) {
    thisEntryContainerClassname += " SelectedEntry";
  }

  let iconURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +
    props.pokeNum +
    ".png";
  return (
    <div className={thisEntryContainerClassname} onClick={handleClick}>
      <img className="PokemonListEntry-Icon" src={iconURL} />

      <p className="PokemonListEntry-Name">
        {capitalizeFirstLetter(props.pokemon.name)}
      </p>

      <p className="PokemonListEntry-Number">
        {"#" + addLeadingZeros(props.pokeNum)}
      </p>
    </div>
  );
}

export default PokemonListEntry;
