//example taken from the (very useful) blog post : https://kentcdodds.com/blog/usememo-and-usecallback

import React, { useState } from "react";

const CountButton = React.memo(function CountButton({ onClick, count, tag }) {
  console.log(tag, " rendered");
  return (
    <div className="comp">
      <button onClick={onClick}>{count}</button>
    </div>
  );
});

function NonOptimizedDualCounter() {
  const [count1, setCount1] = useState(0);
  const increment1 = () => setCount1((c) => c + 1);

  const [count2, setCount2] = useState(0);
  const increment2 = () => setCount2((c) => c + 1);

  return (
    <div className="comp">
      <div className="title"> none optimized double counter</div>
      <CountButton count={count1} onClick={increment1} tag="1" />
      <CountButton count={count2} onClick={increment2} tag="2" />
    </div>
  );
}

export default NonOptimizedDualCounter;
