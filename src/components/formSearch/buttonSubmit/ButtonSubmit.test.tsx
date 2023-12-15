import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonSubmit from "./ButtonSubmit";

describe("Button submit", () => {
  test("renders correctly", () => {
    render(<ButtonSubmit />);
    const buttonElement = screen.getByRole("button", { name: /найти/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('has type "submit"', () => {
    render(<ButtonSubmit />);
    const buttonElement = screen.getByRole("button", { name: /найти/i });
    expect(buttonElement).toHaveAttribute("type", "submit");
  });
});
