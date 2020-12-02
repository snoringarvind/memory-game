import "./App.css";
import ImageContainer from "./components/ImageContainer";
import React, { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <div className="score">Score: {score}</div>
      <ImageContainer score={score} setScore={setScore} />
    </div>
  );
}

export default App;
