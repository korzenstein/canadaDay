import { useState } from 'react'

const Flags = ({provChoice, provArray, flagHandler, flagToggle}) => {
    
    return (
        <div className="flagsContainer">
        {provArray.map(item => {
            return (
                <div>
                {item[0] === provChoice ? 
                <img 
                // className="flag flasher"
                key={item}
                className="flag flasher"
                onClick={() => {flagHandler()}}
                src={item[1].flag.image} alt={`flag of ${provChoice}`} /> : null}
                {
                    item[0] === provChoice && flagToggle ? 
                    <>
                    {/* <p className="flagInfo">{item[1].title.title}</p>  */}
                    <p className="flagInfo">{item[1].flag.info}</p> 
                    </>
                    : null
                }
                </div>
            )
        })}
        </div>
    )
}

export default Flags