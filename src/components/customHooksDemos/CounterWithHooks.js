import React from "react";
import useCounter from "../../hooks/useCounter";

function CounterWithHooks() {
  const [count, increment, decrement, reset] = useCounter(0);

  return (
    <div className="comp">
      <div className="title"> counter with hook</div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterWithHooks;
