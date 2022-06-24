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
                className="title flasher"
                >{item[1].province}</h2>
                <h7 className="factoid flasher">{item[1].population}</h7>
                <h7 className="factoid flasher">{item[1].language}</h7>
                <h7 className="factoid flasher">{item[1].capital}</h7>
                <h7 className="factoid flasher">{item[1].status}</h7>
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
