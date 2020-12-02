import React, { useState } from "react";

const Card = ({ card, score, setScore, arr, setArr, setCards, images, i }) => {
  const [win, setWin] = useState("");

  const clickHandler = () => {
    if (images.length <= 8) {
      console.log("congratulations you won");
      return;
    }
    setScore(score + 1);

    setArr((prev) => [...prev, card]);
    if (arr.includes(card)) {
      setScore(0);
      setArr([]);
    }

    setCards([]);
    images.splice(i, 1);
  };

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
