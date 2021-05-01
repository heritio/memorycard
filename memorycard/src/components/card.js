import React, { useState, useEffect } from "react";
import "./style.css";

function Card(props) {
  return (
    <div
      id={props.id}
      className="card"
      onClick={() => {
        props.sortHandler();
        props.plusScore();
        props.sequenceHandler(props.id);
      }}
    >
      <img className="card-img" src={props.ourSrc} alt={props.cardName} />
      <p>{props.cardName}</p>
    </div>
  );
}

export default Card;
