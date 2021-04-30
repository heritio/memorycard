import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Card from "./components/card";

import { cardData } from "./data.js";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <Header className="App-header" score={score} bestScore={bestScore} />
      <div className="card-field">
        {cardData.map((char) => (
          <Card
            key={char.id}
            id={char.id}
            ourSrc={char.source}
            cardName={char.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
