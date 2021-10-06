import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const text = "AButton";
  return (
    <div>
      <h1>Hello World!</h1>
      <p style={{ backgroundColor: "grey", color: "green" }}> Lorem ipsum </p>
      <button>{text}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
