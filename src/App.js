import React, { useState } from "react";
import "./App.css";
import ImageContainer from "./components/ImageContainer";
import CardList from "./components/CardList";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <div className="score">
        <div>Score: {score}</div>
        <div>Max score : 50</div>
      </div>
      <ImageContainer score={score} setScore={setScore} />
    </div>
  );
}

export default App;
