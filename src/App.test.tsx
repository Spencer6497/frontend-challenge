import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a drawer", () => {
  render(<App />);
  expect(screen.getByText(/Table/i)).toBeInTheDocument();
  expect(screen.getByText(/Charts/i)).toBeInTheDocument();
});
