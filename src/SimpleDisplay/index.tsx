import React, { useCallback, useState } from "react";

export const COLORS = ["#ABCDEF", "#FEDCBA", "#CCCCCC"];

function SimpleDisplay() {
  const [color, setColor] = useState(COLORS[0]);
  const onClickHandler = useCallback(() => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    setColor(randomColor);
  }, []);

  return (
    <div>
      <h1 style={{ color: color }}>This changes color!</h1>
      <button onClick={onClickHandler}>Randomize!</button>
    </div>
  );
}

export default SimpleDisplay;
