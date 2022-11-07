import "./RightSide.css";

import axios from "axios";

import { useEffect, useState } from "react";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function RightSide(props) {
  const [eggGroups, setEggGroups] = useState("");

  useEffect(() => {
    axios.get(props.selectedPokemon.species.url).then((response) => {
      setEggGroups(
        response.data.egg_groups.map((eggGroup, index) => {
          return (
            <span key={index}>
              {index > 0
                ? ", " + capitalizeFirstLetter(eggGroup.name)
                : capitalizeFirstLetter(eggGroup.name)}
            </span>
          );
        })
      );
    });
  }, [props.selectedPokemon]);

  const abilities = props.selectedPokemon.abilities.map((abilityObj, index) => {
    return (
      <span className="RightSide-Ability" key={index}>
        {index > 0
          ? ", " + capitalizeFirstLetter(abilityObj.ability.name)
          : capitalizeFirstLetter(abilityObj.ability.name)}
      </span>
    );
  });

  return (
    <div className="RightSide-container">
      <p className="RightSide-Title"> Information</p>
      <p className="RightSide-Weight RightSide-Stat">
        <b>Weight:</b>
        {" " + props.selectedPokemon.weight / 10} kg
      </p>
      <p className="RightSide-Height RightSide-Stat">
        <b>Height:</b>
        {" " + props.selectedPokemon.height * 10} m
      </p>

      <p className="RightSide-EggGroups RightSide-Stat">
        <b>Egg Groups:</b> {eggGroups ? eggGroups : "loading EggGroups"}
      </p>
      <p className="RightSide-Abilities RightSide-Stat">
        <b>Abilities:</b> {abilities}
      </p>
    </div>
  );
}

export default RightSide;
