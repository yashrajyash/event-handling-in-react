import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello!");
  const [isMouseOver, setMouseover] = useState(false);

  function handleClick() {
    setHeadingText("Submitted!");
  }

  function handleMouseOver() {
    setMouseover(true);
  }

  function handleOnMouseOut() {
    setMouseover(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOut={handleOnMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
