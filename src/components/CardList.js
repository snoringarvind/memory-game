import { useEffect, useState } from "react";
import React from "react";
import Card from "./Card";
import uniqid from "uniqid";

const CardList = ({ images, score, setScore, setImages }) => {
  useEffect(() => {
    generateRandom();
  }, [score]);

  const [cards, setCards] = useState([]);
  const [arr, setArr] = useState([]);
  // const []

  const generateRandom = () => {
    var i = images.length,
      j = 0,
      temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      // swap randomly chosen element with current element
      temp = images[i];
      images[i] = images[j];
      images[j] = temp;
    }

    const x = Math.floor(Math.random() * arr.length);
    const y = Math.floor(Math.random() * 7) + 1;

    for (let i = 0; i < 8; i++) {
      if (score === 0) {
        setCards((prev) => [...prev, images[i]]);
      }
      if (score > 0) {
        if (i === y) {
          setCards((prev) => [...prev, arr[x]]);
        } else {
          setCards((prev) => [...prev, images[i]]);
        }
      }
    }
  };

  return (
    <div className="CardList">
      {cards.map((card, index) => (
        <Card
          i={index}
          card={card}
          key={uniqid()}
          score={score}
          setScore={setScore}
          arr={arr}
          setArr={setArr}
          setCards={setCards}
          images={images}
          cards={cards}
        />
      ))}
    </div>
  );
};

export default CardList;
