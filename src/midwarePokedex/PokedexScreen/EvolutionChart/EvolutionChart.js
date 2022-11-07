import "./EvolutionChart.css";

import { useEffect, useState } from "react";
import axios from "axios";

import RedArrowIcon from "./assets/RedArrowIcon.png";

function extractIDfromURL(URL) {
  let ID = URL.split("pokemon-species")[1];

  ID = ID.split("/");
  return ID[1];
}

function imageURLFromID(ID) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ID}.png`;
}

function EvolutionChart(props) {
  const [evolutionChainIDs, setEvolutionChainIDs] = useState([]);

  useEffect(() => {
    axios.get(props.selectedPokemon.species.url).then((response) => {
      axios.get(response.data.evolution_chain.url).then((newResponse) => {
        let chain = newResponse.data.chain;

        let newEvolutionChain = [];
        newEvolutionChain.push(extractIDfromURL(chain.species.url));

        if (chain.evolves_to[0]) {
          newEvolutionChain.push(
            extractIDfromURL(chain.evolves_to[0].species.url)
          );

          if (chain.evolves_to[0].evolves_to[0]) {
            newEvolutionChain.push(
              extractIDfromURL(chain.evolves_to[0].evolves_to[0].species.url)
            );
          }
        }

        setEvolutionChainIDs(newEvolutionChain);
      });
    });
  }, [props.selectedPokemon]);

  const chart = evolutionChainIDs.map((id) => {
    return <img className="ChartImage" src={imageURLFromID(id)} key={id} />;
  });

  if (evolutionChainIDs.length > 1) {
    const redArrowIcon = <img className="arrow" src={RedArrowIcon} key={111} />;
    chart.splice(1, 0, redArrowIcon);
  }

  if (evolutionChainIDs.length > 2) {
    const redArrowIcon = <img className="arrow" src={RedArrowIcon} key={222} />;
    chart.splice(3, 0, redArrowIcon);
  }

  return <div className="EvolutionChart-container">{chart}</div>;
}

export default EvolutionChart;
