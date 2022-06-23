const Title = ({ provChoice, provArray }) => {
  return (
    <div className="titleContainer">
      <h1>Encyclopedia Canadiana</h1>
      <div className="title">
        {provArray.map((item) => {
          return (
            <>
              {item[0] === provChoice ? (
                <h2 
                key={item}
                className="title flasher"
                >{item[1].province}</h2>
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Title;
