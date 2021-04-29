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
      <Header className="App-header" />
      <div className="card-field"></div>
    </div>
  );
}

export default App;
