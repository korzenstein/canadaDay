import { useState } from 'react'

const Flags = ({provChoice, provData, flagHandler, flagToggle}) => {
    
    return (
        <div className="flagsContainer">
        {provData.map(item => {
            return (
                <div>
                {item[0] === provChoice ? 
                <div
                key={item}
                className="flagImageContainer flasher"
                >
                <img 
                // key={item}
                className="flag"
                onClick={() => {flagHandler()}}
                src={item[1].flag.imageUrl} alt={`flag of ${provChoice}`} />
                </div> : null}

                {/* {
                    item[0] === provChoice && flagToggle ? 
                    <>
                    
                    <p className="flagInfo">{item[1].flag.info}</p> 
                    </>
                    : null
                } */}
                </div>
            )
        })}
        </div>
    )
}

export default Flags