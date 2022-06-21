import "./App.css";
import { useEffect, useState } from "react";
import provincialData from "./data/provincialData";


// components
import Flags from "./components/Flags"
import Facts from './components/Facts'
import CanadaMap from "./components/CanadaMap";
import DataVis from "./components/DataVis";

const App = () => {
  const newProvArray = Object.entries(provincialData)
  const [provArray, setProvArray] = useState(newProvArray)
  const [provChoice, setProvChoice] = useState(["default"]);

   const handleChoice = (province) => {
    setProvChoice(province);
    console.log(provChoice);
  };

  return (
    <div className="App">
      <CanadaMap 
      handleChoice={handleChoice}
      provChoice={provChoice}
      setProvChoice={setProvChoice}
      />
      <Flags
      handleChoice={handleChoice}
      provChoice={provChoice}
      setProvChoice={setProvChoice}
      provArray={provArray}
      />
      {/* <Facts
      handleChoice={handleChoice}
      provChoice={provChoice}
      setProvChoice={setProvChoice}
      provArray={provArray}

      /> */}
    </div>
  );
};

export default App;
