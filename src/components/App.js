import React from "react";

// getJson を受け取る
const App = ({ number, day, title, plus, minus, asyncMinus, getJson }) => (
  <div>
    <h2>
      {title} {number} {day}
    </h2>
    <button
      onClick={() => {
        plus(10);
      }}
    >
      + 10
    </button>
    <button
      onClick={() => {
        minus(10);
      }}
    >
      - 10
    </button>
    <button
      onClick={() => {
        asyncMinus(10);
      }}
    >
      async - 10
    </button>
    <button
      onClick={() => {
        // 実行する
        getJson();
      }}
    >
      getJson
    </button>
  </div>
);

export default App;
