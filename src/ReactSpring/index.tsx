import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";

export function ReactSpring() {
  return (
    <div>
      <YourNetWorth />
    </div>
  );
}

function YourNetWorth() {
  const { number } = useSpring({
    reset: true,
    from: { number: 0 },
    number: 999999999,
    delay: 200,
    config: config.default,
  });

  return (
    <div>
      Your net worth is now <animated.span>{number.to((n) => n.toFixed(2))}</animated.span>
    </div>
  );
}
