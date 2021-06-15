import React from 'react'
import { useSpring, animated } from "react-spring";

export function ReactSpringFading() {
    const props = useSpring({ from: { opacity: 1 }, to: { opacity: 0 } })
    return (
        <div
            style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "black",
                backgroundColor: "aquamarine",
                width: "200px",
                height: "200px"
            }}
            {...props}
        >
            Fading Box
        </div>
    );
}
