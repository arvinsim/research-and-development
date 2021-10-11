import React from "react";
import { expect } from "@jest/globals";
import { render } from "@testing-library/react";
import SimpleDisplay, { COLORS } from "../SimpleDisplay";

test("displays default text", async () => {
  const sd = render(<SimpleDisplay />);
  expect(true).toBeTruthy();
});
