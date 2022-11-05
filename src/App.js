import logo from "./logo.svg";
import "./App.css";

import Ref1 from "./ReferenceImages/Ref1.png";
import Ref2 from "./ReferenceImages/Ref2.png";

import MidwarePokedex from "./MidwarePokedex/MidwarePokedex";

function App() {
  return (
    <div className="App">
      <img className="referenceImage" src={Ref1} />

      <MidwarePokedex />
    </div>
  );
}

export default App;
