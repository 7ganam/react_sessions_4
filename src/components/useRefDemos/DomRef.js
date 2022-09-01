import React, { useRef, useEffect } from "react";

function DomRef() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.innerHTML = "hello world";
    // inputRef.current.focus();
  }, []);

  return (
    <div className="comp">
      <div className="title"> useRef Demo</div>
      <div ref={inputRef}></div>
      {/* <input ref={inputRef} type="text" /> */}
    </div>
  );
}

export default DomRef;
