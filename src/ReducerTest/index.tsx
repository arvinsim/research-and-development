import React, { useReducer } from "react";

interface State {
  r: number;
  g: number;
  b: number;
}
type Action =
  | { type: "INCREMENT_R" }
  | { type: "DECREMENT_R" }
  | { type: "INCREMENT_G" }
  | { type: "DECREMENT_G" }
  | { type: "INCREMENT_B" }
  | { type: "DECREMENT_B" };

function ReducerTest() {
  const limitRGB = (val: number): number => {
    if (val < 0) {
      return 0;
    }

    if (val > 255) {
      return 255;
    }

    return val;
  };
  const step = 50;
  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "INCREMENT_R":
        return Object.assign({}, state, { r: limitRGB(state.r + step) });
      case "DECREMENT_R":
        return Object.assign({}, state, { r: limitRGB(state.r - step) });
      case "INCREMENT_G":
        return Object.assign({}, state, { g: limitRGB(state.g + step) });
      case "DECREMENT_G":
        return Object.assign({}, state, { g: limitRGB(state.g - step) });
      case "INCREMENT_B":
        return Object.assign({}, state, { b: limitRGB(state.b + step) });
      case "DECREMENT_B":
        return Object.assign({}, state, { b: limitRGB(state.b - step) });
      default:
        return state;
    }
  };
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });

  return (
    <div>
      <h1 style={{ color: `rgb(${r}, ${g}, ${b})` }}>I am changing color!</h1>
      <div>
        <div>
          Red
          <button onClick={() => dispatch({ type: "INCREMENT_R" })}>+</button>
          <button onClick={() => dispatch({ type: "DECREMENT_R" })}>-</button>
        </div>
        <div>
          Green
          <button onClick={() => dispatch({ type: "INCREMENT_G" })}>+</button>
          <button onClick={() => dispatch({ type: "DECREMENT_G" })}>-</button>
        </div>
        <div>
          Blue
          <button onClick={() => dispatch({ type: "INCREMENT_B" })}>+</button>
          <button onClick={() => dispatch({ type: "DECREMENT_B" })}>-</button>
        </div>
      </div>
    </div>
  );
}

export default ReducerTest;
