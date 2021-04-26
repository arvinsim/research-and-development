import React from "react";
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

  const h1Props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: true,
    delay: 400,
    config: config.molasses,
  });

  return (
    <animated.h1 style={h1Props}>
      Your net worth is now{" "}
      <animated.span>{number.to((n) => n.toFixed(2))}</animated.span>
    </animated.h1>
  );
}
