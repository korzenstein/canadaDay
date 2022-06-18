// import { remove } from "firebase/database"
// import { set } from 'firebase/database';
import { useState } from 'react';
import data from './data'
import {motion} from 'framer-motion'

const Distance = () => {

    const [language, setLanguage] = useState(['french'])
    const [rotate, setRotate] = useState(false)
    const handleChange = (e) => {
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
                <motion.label 
                
                animate={{x: rotate ? 200 : -200}}
                transition={{duration: 1}}
                htmlFor="french"
                onClick={() => {
                    setRotate(!rotate)
                    console.log(rotate)
                }}
                >
                FR</motion.label>
                
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