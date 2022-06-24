import "./style/sass/App.scss";
import { useState, useEffect } from "react";
import provincialData from "./data/provincialData";


// components
import Flags from "./components/Flags"
import Facts from './components/Facts'
import CanadaMap from "./components/CanadaMap";
import DataVis from "./components/DataVis";
import Title from "./components/Title";

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

        console.log(provArray)

    // console.log(provArray[langChoice].map(item => item.alberta))


  return (
    <main className="main">
      <div className="wrapper">
      <Title
      provChoice={provChoice}
      provArray={provArray}
      langChoice={langChoice}
      />
      <button
      onClick={() => languageHandler("english")}
      >EN</button>

      <button
      onClick={() => languageHandler("french")}
      >FR</button>
      <CanadaMap 
      handleChoice={handleChoice}
      provChoice={provChoice}
      setProvChoice={setProvChoice}
      />
      {/* <Flags
      handleChoice={handleChoice}
      provChoice={provChoice}
      setProvChoice={setProvChoice}
      provArray={provArray}
      flagHandler={flagHandler}
      flagToggle={flagToggle}
      /> */}
      {/* <Facts
      handleChoice={handleChoice}
      provChoice={provChoice}
      setProvChoice={setProvChoice}
      provArray={provArray}
      /> */}
      
      </div>
    </main>
  );
};

export default App;
