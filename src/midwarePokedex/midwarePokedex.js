import "./MidwarePokedex.css";

import PokedexList from "./PokedexList/PokedexList";
import PokedexScreen from "./PokedexScreen/PokedexScreen";

function MidwarePokedex() {
  return (
    <div className="MidwarePokedex-container">
      <PokedexList />
      <PokedexScreen />
    </div>
  );
}

export default MidwarePokedex;
