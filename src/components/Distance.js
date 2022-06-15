// import { remove } from "firebase/database"
// import { set } from 'firebase/database';
import { useState } from 'react';
import data from './data'

const Distance = () => {

    const [language, setLanguage] = useState(['french'])
    const handleChange = (e) => {
        console.log(e.target.value)
        setLanguage(e.target.value)
    }
   
    
    return (
        <div>
            <h4>Translations</h4>
            <p>{data[language].no}</p>
            <p>{data[language].yes}</p>
            <p>{data[language].maybe}</p>
            <p>{data[language].more}</p>
            

            <h4>Language Choice</h4>
            <form 
            action="#">
                <input
                className="french"
                onChange={handleChange}
                id="french" 
                type="radio" 
                value="french" 
                name="langChoice"/>
                <label htmlFor="french">FR</label>
                <input 
                className="english"
                onChange={handleChange} 
                id="english" 
                type="radio" 
                value="english" 
                name="langChoice"/>
                <label htmlFor="english">EN</label>
                <input 
                className="spanish"
                onChange={handleChange} 
                id="spanish" 
                type="radio" 
                value="spanish" 
                name="langChoice"/>
                <label htmlFor="spanish">ES</label>
            </form>
        </div>
    )
}

export default Distance