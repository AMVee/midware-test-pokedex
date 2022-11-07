import "./EvolutionChart.css";

import { useEffect, useState } from "react";
import axios from "axios";

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

        if (chain.evolves_to) {
          newEvolutionChain.push(
            extractIDfromURL(chain.evolves_to[0].species.url)
          );
        }

        if (chain.evolves_to[0].evolves_to[0]) {
          newEvolutionChain.push(
            extractIDfromURL(chain.evolves_to[0].evolves_to[0].species.url)
          );
        }

        setEvolutionChainIDs(newEvolutionChain);
      });
    });
  }, [props.selectedPokemon]);

  const chartImages = evolutionChainIDs.map((id) => {
    return <img className="ChartImage" src={imageURLFromID(id)} key={id} />;
  });

  return <div className="EvolutionChart-container">{chartImages}</div>;
}

export default EvolutionChart;
