import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Card from "./components/card";

import { ourCardData } from "./data.js";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardData, setCardData] = useState(ourCardData);
  const [cardSequence, setCardSequence] = useState([]);

  useEffect(() => {
    if (cardSequence.some((val, i) => cardSequence.indexOf(val) !== i)) {
      if (score > bestScore) {
        setBestScore(score - 1);
      }
      setScore(0);
      setCardSequence([]);
    }
  }, [cardSequence, score, bestScore]);

  function sortHandler() {
    setCardData(
      cardData
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
    );
  }
  function sequenceHandler(id) {
    setCardSequence([...cardSequence, id]);
  }

  function plusScore() {
    setScore(score + 1);
  }

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
            setCardData={setCardData}
            sortHandler={sortHandler}
            sequenceHandler={sequenceHandler}
            plusScore={plusScore}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
