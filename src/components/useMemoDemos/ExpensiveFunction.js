import React, { useState, useMemo } from "react";

function ExpensiveFunction() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEvenResult = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  // const isEven = () => {
  //   console.log("isEven");
  //   let i = 0;
  //   while (i < 2000000000) i++;
  //   return counterOne % 2 === 0;
  // };

  return (
    <div className="comp">
      <div className="title">useMemo demo</div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        {/* <span>{isEven() ? "Even" : "Odd"}</span> */}
        <span>{isEvenResult ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default ExpensiveFunction;
