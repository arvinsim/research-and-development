import React from "react";
import { useSpring, animated, config } from "react-spring";

export function ReactSpring() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Fading />
      <MoveX />
      <MoveY />
      <Scroll />
    </div>
  );
}

function Fading() {
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

function MoveX() {
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

function MoveY() {
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

function Scroll() {
  const itemHeight = 50;
  const items = ["Is", "this", "real", "life", "Is", "this", "fantasy"];
  const { scroll } = useSpring({
    scroll: (items.length - 1) * itemHeight,
    from: { scroll: 0 },
    reset: true,
    loop: { reverse: true },
    delay: 200,
    config: config.molasses,
  });

  return (
    <animated.div style={{ overflow: "auto", height: 100 }} scrollTop={scroll}>
      {items.map((item, i) => {
        return (
          <div
            key={`${item}_${i}`}
            style={{ height: itemHeight, textAlign: "center" }}
          >
            {item}
          </div>
        );
      })}
    </animated.div>
  );
}
