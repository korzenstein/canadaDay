import { motion } from "framer-motion";

const Facts = ({provChoice, provArray}) => {
    return (
        <>
        {provArray.map(item => {
            return (
                <>
                {item[0] === provChoice ? 
                <p>{item[1].province}</p> : null}
                </>
            )
        })}

        </>
    )
}

export default Facts