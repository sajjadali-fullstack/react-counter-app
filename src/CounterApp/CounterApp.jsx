import { useState } from "react";
import "./CounterApp.css";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
      <p className="counter-label">REACT REVISION</p>
      <h1>Counter App</h1>

      <div className="count-display">{count}</div>

      <p className="counter-message">
        {count === 0
          ? "Let's get started!"
          : count > 0
          ? "Keep counting up!"
          : "Counting down!"}
      </p>

      <div className="counter-buttons">
        <button
          className="btn decrement"
          onClick={() => setCount((prev) => prev - 1)}
        >
          − Decrement
        </button>

        <button
          className="btn reset"
          onClick={() => setCount(0)}
        >
          Reset
        </button>

        <button
          className="btn increment"
          onClick={() => setCount((prev) => prev + 1)}
        >
          + Increment
        </button>
      </div>
    </div>
  );
};

export default CounterApp;