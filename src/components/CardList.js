import { useEffect, useState } from "react";
import React from "react";
import Card from "./Card";
import uniqid from "uniqid";

const CardList = ({ images, score, setScore }) => {
  // useEffect(() => {
  //   generateRandom();
  // }, []);

  useEffect(() => {
    generateRandom();
  }, [score]);

  const [cards, setCards] = useState([]);
  const [arr, setArr] = useState([]);

  const generateRandom = () => {
    for (let i = 0; i < 6; i++) {
      const a = Math.floor(Math.random() * 50);
      console.log(a);
      setCards((prev) => [
        ...prev,
        { src: images[a].src, name: images[a].name },
      ]);
    }
  };

  console.log(cards);
  // console.log(images[30]);
  return (
    <div className="CardList">
      {cards.map((card) => (
        <Card
          card={card}
          key={uniqid()}
          score={score}
          setScore={setScore}
          arr={arr}
          setArr={setArr}
          // generateRandom={generateRandom}
          setCards={setCards}
        />
      ))}
    </div>
  );
};

export default CardList;
