const Languages = ({ languageHandler }) => {
  return (
    <div className="langContainer">
      <p>
        <span className="english" onClick={() => languageHandler("english")}>
          en </span>
        /
        <span
          className="french"
          onClick={() => languageHandler("french")}
        > fr</span>
        </p>
      
    </div>
  );
};
export default Languages;
