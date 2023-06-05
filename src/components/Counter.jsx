import React, { useState, useMemo } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const counterText = useMemo(() => {
    return `${count}`;
  }, [count]);

  return (
    <div className="counter">
      <button className="counter-btn" onClick={handleDecrement}>
        -
      </button>
      <span className="counter-text">{counterText}</span>
      <button className="counter-btn" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;
