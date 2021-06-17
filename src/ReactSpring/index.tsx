import React from "react";
import { useSpring, animated, config } from "react-spring";

export function ReactSpring() {
  return (
    <div style={{ width: "100%" }}>
      <ReactSpringFading />
      <ReactSpringMoveX />
      <ReactSpringMoveY />
    </div>
  );
}

function ReactSpringFading() {
  const styleProps = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    loop: { reverse: true },
    config: config.molasses,
  });

  return (
    <animated.div
      style={{
        textAlign: "center",
        fontWeight: "bold",
        color: "black",
        backgroundColor: "aquamarine",
        width: "200px",
        height: "200px",
        ...styleProps,
      }}
    >
      React Spring Fading
    </animated.div>
  );
}

function ReactSpringMoveX() {
  const styleProps = useSpring({
    from: { x: 0 },
    to: { x: 500 },
    loop: { reverse: true },
    config: config.molasses,
  });
  return (
    <animated.div
      style={{
        width: "100px",
        backgroundColor: "antiquewhite",
        ...styleProps,
      }}
    >
      React Spring Move X
    </animated.div>
  );
}

function ReactSpringMoveY() {
  const styleProps = useSpring({
    from: { y: 0 },
    to: { y: 200 },
    loop: { reverse: true },
    config: config.molasses,
  });
  return (
    <animated.div
      style={{
        position: "relative",
        width: "100px",
        backgroundColor: "aquamarine",
        ...styleProps,
      }}
    >
      React Spring Move Y
    </animated.div>
  );
}
