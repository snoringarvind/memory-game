import React, { useState } from "react";

const Card = ({ card, score, setScore, arr, setArr, setCards }) => {
  const clickHandler = () => {
    setScore(score + 1);

    setArr((prev) => [...prev, card.name]);
    if (arr.includes(card.name)) {
      setScore(0);
      setArr([]);
    }

    setCards([]);
  };

  console.log(arr);
  console.log(score);

  return (
    <div className="Card" onClick={clickHandler}>
      <div className="img">
        <img src={card.src} alt="haha" />
      </div>
      <div className="label">{card.name}</div>
    </div>
  );
};

export default Card;
