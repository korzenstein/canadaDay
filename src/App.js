import "./style/sass/App.scss";
import { useState, useEffect } from "react";
import axios from 'axios';

// import provincialData from "./data/provincialData";



// components
import Flags from "./components/Flags"
import Facts from './components/Facts'
import CanadaMap from "./components/CanadaMap";
import Title from "./components/Title";
import Languages from "./components/Languages";


const App = () => {
  const [langChoice, setLangChoice] = useState("english")
  useEffect(() => {
  const configLocale = {
      method: "get",
      url: `https://api.jsonbin.io/b/62bcf53f402a5b38024246df`,
      headers: {
      'X-Master-Key': '$2b$10$dBNW6g9lshV2AEVlShSKzeSQ2ykDhBbIlfHAE.pnNq2PHIMe.zPRa',
    },
    };

    axios(configLocale)
      .then(function (response) {
        const results = response.data;
        const newDataArray = Object.entries(results[langChoice])
        setProvData(newDataArray)
      })

      .catch(function (error) {
        console.log(error);
      });

}, [langChoice])

  const [provChoice, setProvChoice] = useState(["default"]);
  const [flagToggle, setFlagToggle ] = useState(false)
  
  // const newProvArray = Object.entries(provincialData[langChoice])
  // const [provArray, setProvArray] = useState(newProvArray)
  const [provData, setProvData] = useState([])

  // useEffect(() => {
  //   const newDataArray = Object.entries(results[langChoice])
  //   setProvData(newDataArray)
  // }, [langChoice])


   const handleChoice = (province) => {
    setProvChoice(province);
    setFlagToggle(false)
  };

    const flagHandler = () => {
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
      // provArray={provArray}
      langChoice={langChoice}
      provData={provData}
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
      // provArray={provArray}
      provData={provData}
      flagHandler={flagHandler}
      flagToggle={flagToggle}
      langChoice={langChoice}
      />
      <Facts
      handleChoice={handleChoice}
      provChoice={provChoice}
      setProvChoice={setProvChoice}
      // provArray={provArray}
      langChoice={langChoice}
      provData={provData}
      />
      <Languages
      languageHandler={languageHandler} 
      />
      <footer className="footer" >
              <p>designed + developed by Stephen Korzenstein 2022</p>
      </footer>
      </div>
    </main>
  );
};

export default App;
