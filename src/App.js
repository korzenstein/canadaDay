import "./style/sass/App.scss";
import { useState } from "react";
import provincialData from "./data/provincialData";


// components
import Flags from "./components/Flags"
import Facts from './components/Facts'
import CanadaMap from "./components/CanadaMap";
import DataVis from "./components/DataVis";
import Title from "./components/Title";

const App = () => {
  const newProvArray = Object.entries(provincialData)
  const [provArray, setProvArray] = useState(newProvArray)
  const [provChoice, setProvChoice] = useState(["default"]);
  const [flagToggle, setFlagToggle ] = useState(false)


   const handleChoice = (province) => {
    setProvChoice(province);
    setFlagToggle(false)
    console.log(provChoice);
  };

    const flagHandler = () => {
        console.log(provChoice)
        setFlagToggle(!flagToggle)

    }

  return (
    <main className="main">
      <div className="wrapper">
      <Title
      provChoice={provChoice}
      provArray={provArray}
      />
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
      flagHandler={flagHandler}
      flagToggle={flagToggle}
      />
      <Facts
      handleChoice={handleChoice}
      provChoice={provChoice}
      setProvChoice={setProvChoice}
      provArray={provArray}
      />
      </div>
    </main>
  );
};

export default App;
