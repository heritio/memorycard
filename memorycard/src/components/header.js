import React from "react";

function Header(props) {
  return (
    <div>
      <div>
        <h1>Memory Card Game</h1>
        <p>
          Get Points by clicking on a picture without clicking on the same
          picture again
        </p>
      </div>
      <div>
        <p>Score: </p>
        <p>Best Score:</p>
      </div>
    </div>
  );
}

export default Header;
