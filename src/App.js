import "./style/sass/App.scss";
import { useState, useEffect } from "react";
import provincialData from "./data/provincialData";


// components
import Flags from "./components/Flags"
import Facts from './components/Facts'
import CanadaMap from "./components/CanadaMap";
import DataVis from "./components/DataVis";
import Title from "./components/Title";
import Languages from "./components/Languages";


const App = () => {

  const [provChoice, setProvChoice] = useState(["default"]);
  const [flagToggle, setFlagToggle ] = useState(false)
  const [langChoice, setLangChoice] = useState("english")
  const newProvArray = Object.entries(provincialData[langChoice])
  const [provArray, setProvArray] = useState(newProvArray)

  useEffect(() => {
    const updatedLanguage = Object.entries(provincialData[langChoice])
    setProvArray(updatedLanguage)



  }, [langChoice])


   const handleChoice = (province) => {
    setProvChoice(province);
    setFlagToggle(false)
    console.log(provChoice);
  };

    const flagHandler = () => {
        console.log(provChoice)
        setFlagToggle(!flagToggle)
    }

    const languageHandler = (language) => {
      setLangChoice(language)
    }

  return (
    <main className="main">
      <div className="wrapper">
      <Title
      provChoice={provChoice}
      provArray={provArray}
      langChoice={langChoice}
      />
      <CanadaMap 
      handleChoice={handleChoice}
      provChoice={provChoice}
      setProvChoice={setProvChoice}
      langChoice={langChoice}
      />
      <Flags
      handleChoice={handleChoice}
      provChoice={provChoice}
      setProvChoice={setProvChoice}
      provArray={provArray}
      flagHandler={flagHandler}
      flagToggle={flagToggle}
      langChoice={langChoice}
      />
      <Facts
      handleChoice={handleChoice}
      provChoice={provChoice}
      setProvChoice={setProvChoice}
      provArray={provArray}
      langChoice={langChoice}
      />
      <Languages
      languageHandler={languageHandler} 
      />
      
      </div>
    </main>
  );
};

export default App;
