import { useState } from "react";

// import provincialData from "../data/provincialData";

const Facts = ({ provChoice, langChoice, provData }) => {
  const [factChoice, setFactChoice] = useState([]);
  const radios = {
    english: {
      flora: "Flora",
      fauna: "Fauna",
      park: "National Park",
      trivia: "Trivia",
    },
    french: {
      flora: "Flore",
      fauna: "Faune",
      park: "Parc National",
      trivia: "Futilités",
    }
  }

  console.log(radios[langChoice].flora)
  const handleFacts = (e) => {
    setFactChoice(e.target.value);
    console.log(e.target.value)
    console.log('clicker')
  };


  return (
    <div className="factsContainer">
      
      <div 

      className={provChoice == "default" ? "none" : "buttonsContainer flasher"}>
        <input type="radio" 
        id="flora" 
        value="flora"
        name="facts"
        onChange={handleFacts}/>
        <label 
        className="labels"
        htmlFor="flora" >{radios[langChoice].flora}</label>

         <input 
         type="radio" 
         id="fauna" 
         value="fauna"
         name="facts"
         onChange={handleFacts}/>
        <label 
        className="labels"
        htmlFor="fauna" 
        >{radios[langChoice].fauna}</label>

         {/* <input 
         type="radio" 
         id="trivia" 
         value="trivia"
         name="facts"
         onChange={handleFacts}/>
        <label 
        className="labels"
        htmlFor="trivia" 
        >{radios[langChoice].trivia}</label> */}
    

         <input 
         type="radio" 
         id="park" 
         value="park"
         name="facts"
         onChange={handleFacts}/>
        <label 
        className="labels"
        htmlFor="park" 
        >{radios[langChoice].park}</label>
      
      </div>
      <div className="factsData">
        {provData.map((item) => {
          return (
            <>
              {item[0] === provChoice ? (
                <div 
                key={item}
                className="dataSet">
                
                  <div className="floraImageContainer">
                    <h5
                    className="subtitle flasher"
                    >{item[1].facts[factChoice]?.name}</h5>
                    <img
                      className="floraImage flasher"
                      src={item[1].facts[factChoice]?.imageUrl}
                      alt={item[1].facts[factChoice]?.name}
                    />
        
                  </div>
                </div>
              ) : null}
            </>
          );
        })}
      
      </div>
      
    </div>
  );
};

export default Facts;
