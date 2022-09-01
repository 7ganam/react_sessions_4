import React, { useState, useEffect, useRef } from "react";

function WebApiHandlerRef() {
  const [timer, setTimer] = useState(0);
  // let interValRef = {};
  const interValRef = useRef();
  console.log("interValRef :>> ", interValRef);

  useEffect(() => {
    interValRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      clearInterval(interValRef.current);
    };
  }, []);

  return (
    <div className="comp">
      <div className="title">useRef WEB api demo</div>
      HookTimer - {timer} -
      <button onClick={() => clearInterval(interValRef.current)}>
        Clear Timer
      </button>
    </div>
  );
}

export default WebApiHandlerRef;
