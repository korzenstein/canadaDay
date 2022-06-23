import { motion } from "framer-motion";
import { useState } from "react";

import provincialData from "../data/provincialData";

const Facts = ({ provChoice, provArray }) => {
  const [factChoice, setFactChoice] = useState([]);

  const handleFacts = (e) => {
    setFactChoice(e.target.value);
    console.log(e.target.value)
  };

  console.log(provArray)

  return (
    <div className="factsContainer">
      <div className="factsData">
        {provArray.map((item) => {
          return (
            <>
              {item[0] === provChoice ? (
                <div 
                key={item}
                className="dataSet">
                
                  <div className="floraImageContainer">
                    <img
                      // key={item}
                      className="floraImage flasher"
                      src={item[1].facts[factChoice]?.image}
                      alt="flower of province"
                    />
                    <p
                    className="subtitle flasher"
                    // key={item}
                    >{item[1].facts[factChoice]?.name}</p>
                  </div>
                </div>
              ) : null}
            </>
          );
        })}
      
      </div>
      <div className="buttonsContainer">
        <input type="radio" 
        id="flora" 
        value="flora"
        name="facts"
        onChange={handleFacts}/>
        <label htmlFor="flora" >Flora</label>

         <input 
         type="radio" 
         id="fauna" 
         value="fauna"
         name="facts"
         onChange={handleFacts}/>
        <label htmlFor="fauna" 
        >Fauna</label>

         <input 
         type="radio" 
         id="trivia" 
         value="trivia"
         name="facts"
         onChange={handleFacts}/>
        <label htmlFor="trivia" 
        >Trivia</label>

         <input 
         type="radio" 
         id="economy" 
         value="economy"
         name="facts"
         onChange={handleFacts}/>
        <label 
        htmlFor="economy" 
        >Economy</label>
      
      </div>
    </div>
  );
};

export default Facts;
