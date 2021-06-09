import React from "react";
import { useSpring, animated, config } from "react-spring";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export function ReactSpring() {
  return (
    <Parallax pages={2} style={{ top: "0", left: "0" }}>
      <ParallaxLayer
        offset={0}
        speed={2.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          <YourNetWorth />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={2}
        style={{ backgroundColor: "#ff6d6d" }}
      />

      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
          <h1>That's great!</h1>
      </ParallaxLayer>
    </Parallax>
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
