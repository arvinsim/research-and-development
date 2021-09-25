import React from "react";

function D3Playground() {
  const testPath = "M200,200 L250,250 M300,300 C300,310 400,410 400,400";
  return (
    <div>
      <h1>D3 Playground</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="400"
        height="400"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          strokeWidth="3"
          fill="red"
        />
        <path d={testPath} fill="none" stroke="#000" strokeWidth={2} />
      </svg>
    </div>
  );
}

export default D3Playground;
