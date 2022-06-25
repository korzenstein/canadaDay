const Title = ({ provChoice, provArray }) => {
  return (
    <div className="titleContainer">
      <h1>Encyclopedia Canadiana</h1>
      <div className="title">
        {provArray.map((item) => {
          return (
            <>
              {item[0] === provChoice ? (
                <>
                <h2 
                className="flasher"
                >{item[1].province}</h2>
                <h7 className="subInfo flasher">{item[1].population}</h7>
                <h7 className="subInfo lang flasher">{item[1].language}</h7>
                <h7 className="subInfo flasher">{item[1].confederation}</h7>
                <h7 className="subInfo flasher">{item[1].capital}</h7>
                </>
              ) : null}
              
              
            </>

          );
        })}
      </div>
    </div>
  );
};

export default Title;
