const Flags = ({provChoice, provArray}) => {
    return (
        <>
        {provArray.map(item => {
            return (
                <>
                {item[0] === provChoice ? 
                <img 
                className="flag flasher"
                key={item}
                src={item[1].flag} alt="" /> : null}
                </>
            )
        })}
        </>
    )
}

export default Flags