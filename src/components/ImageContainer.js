import React, { useState } from "react";
import CardList from "./CardList";

const ImageContainer = ({ score, setScore }) => {
  const [images, setImages] = useState(file);

  return (
    <div className="ImageContainer">
      <CardList
        images={images}
        setImages={setImages}
        score={score}
        setScore={setScore}
      />
    </div>
  );
};

const cache = {};

const importAll = (r) => {
  r.keys().forEach((key) => (cache[key] = r(key).default));
};

importAll(require.context("./marvelCharacters", false, /\.(jpg)|(png)|(jpeg)/));

const data = () => {
  const file = [
    { src: cache["./antMan.jpg"], name: "Ant Man" },
    { src: cache["./apocalypse.jpg"], name: "Apocalypse" },
    { src: cache["./blackPanther.png"], name: "Black Panther" },
    { src: cache["./blackwidow.jpg"], name: "Black Widow" },
    { src: cache["./cable.jpg"], name: "Cable" },
    { src: cache["./captainAmerica.jpg"], name: "Captain America" },
    { src: cache["./captainMarvel.jpg"], name: "Captain Marvel" },
    { src: cache["./clintBarton.jpg"], name: " Clint Barton" },
    { src: cache["./cyclops.png"], name: "Cyclops" },
    { src: cache["./deadpool.jpg"], name: "Deadpool" },
    { src: cache["./drax.jpg"], name: "Drax" },
    { src: cache["./gambit.jpg"], name: "Gambit" },
    { src: cache["./gamora.jpg"], name: "Gamora" },
    { src: cache["./ghostRider.jpg"], name: "Ghost Rider" },
    { src: cache["./groot.jpg"], name: "Groot" },
    { src: cache["./hulk.jpg"], name: "Hulk" },
    { src: cache["./humanTorch.jpg"], name: "Human Torch" },
    { src: cache["./iceMan.jpg"], name: "Ice Man" },
    { src: cache["./ironFist.png"], name: "Iron Fist" },
    { src: cache["./ironMan.jpg"], name: "Iron Man" },
    { src: cache["./jeanGrey.jpg"], name: "Jean Grey" },
    { src: cache["./juggernaut.jpg"], name: "Juggernaut" },
    { src: cache["./loki.jpg"], name: "Loki" },
    { src: cache["./lukeCage.jpg"], name: "Luke Cage" },
    { src: cache["./magneto.jpg"], name: "Magneto" },
    { src: cache["./maryJaneWatson.jpg"], name: "Mary Jane Watson" },
    { src: cache["./mattMurdock.jpg"], name: "Matt Murdock" },
    { src: cache["./misterFantastic.jpg"], name: "Mister Fantastic" },
    { src: cache["./mystique.jpg"], name: "Mystique" },
    { src: cache["./nebula.jpg"], name: "Nebula" },
    { src: cache["./nickFury.jpg"], name: "Nick Fury" },
    { src: cache["./professor X.jpeg"], name: "Professor X" },
    { src: cache["./quickSilver.png"], name: "Quick Silver" },
    { src: cache["./rocketRacoon.jpg"], name: "Rocket Racoon" },
    { src: cache["./rogue.jpg"], name: "Rogue" },
    { src: cache["./ronan.jpg"], name: "Ronan" },
    { src: cache["./sabretooth.jpg"], name: "Sabretooth" },
    { src: cache["./sheHulk.jpg"], name: "She Hulk" },
    { src: cache["./spiderMan.jpg"], name: "Spider Man" },
    { src: cache["./starLord.jpg"], name: "Star Lord" },
    { src: cache["./storm.jpg"], name: "Storm" },
    { src: cache["./thanos.jpg"], name: "Thanos" },
    { src: cache["./thor.jpg"], name: "Thor" },
    { src: cache["./thunderboltRoss.jpg"], name: "Thunderbolt Ross" },
    { src: cache["./wandaMaximoff.jpg"], name: "Wanda Maximoff" },
    { src: cache["./warMachine.jpg"], name: "War Machine" },
    { src: cache["./wasp.jpg"], name: "Wasp" },
    { src: cache["./wolverine.jpg"], name: "Wolverine" },
    { src: cache["./wonderMan.jpg"], name: "Wonder Man" },
    { src: cache["./x23.jpg"], name: "X-23" },
  ];

  return file;
};

const file = data();

export default ImageContainer;
