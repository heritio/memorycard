import React from "react";
import "./style.css";

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img className="card-img" src={props.ourSrc} alt={props.cardName} />
      <p>{props.cardName}</p>
    </div>
  );
}

export default Card;
