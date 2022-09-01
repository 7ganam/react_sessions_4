import React, { useReducer } from "react";

const initialState = { counterOne: 0, counterTwo: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementOne":
      return { ...state, counterOne: state.counterOne + action.payload };
    case "incrementTwo":
      return { ...state, counterTwo: state.counterTwo + action.payload };
    case "decrementOne":
      return { ...state, counterOne: state.counterOne - action.payload };
    case "decrementTwo":
      console.log("action :>> ", action);
      return { ...state, counterTwo: state.counterTwo - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UseReducerCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="comp">
      <div className="title">useReduce Redux style</div>
      <div>Count 1 = {count.counterOne}</div>
      <div>Count 2 = {count.counterTwo}</div>
      <button onClick={() => dispatch({ type: "incrementOne", payload: 5 })}>
        Increment counter 1
      </button>
      <button onClick={() => dispatch({ type: "decrementOne", payload: 5 })}>
        Decrement counter 1
      </button>
      <button onClick={() => dispatch({ type: "incrementTwo", payload: 2 })}>
        Increment counter 2
      </button>
      <button onClick={() => dispatch({ type: "decrementTwo", payload: 3 })}>
        Decrement counter 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default UseReducerCounter;
