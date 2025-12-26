import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Vite + React text", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /vitess \+ reactss/i })
  ).toBeInTheDocument();
});
