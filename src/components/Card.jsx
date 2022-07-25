import React from "react";
import QuoteBox from "./QuoteBox";

const Card = ({ colorRandom, clickButton, quotesRandom }) => {
  const styleButton = {
    backgroundColor: colorRandom,
  };

  return (
    <div className="card" style={{ color: colorRandom }}>
      <QuoteBox quotesRandom={quotesRandom} />
      <button style={styleButton} className="card__btn" onClick={clickButton}>
        &#62;
      </button>
    </div>
  );
};

export default Card;
