import React from "react";
import { render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";
import userEvent from "@testing-library/user-event";

describe("Search Input", () => {
  test("renders correctly", () => {
    const register = jest.fn();
    render(<SearchInput register={register} />);

    const inputElement = screen.getByPlaceholderText(
      "Введите логин пользователя"
    );
    expect(inputElement).toBeInTheDocument();
  });
  
  test("calls register function with correct input name", () => {
    const registerMock = jest.fn();
    render(<SearchInput register={registerMock} />);
    const inputElement = screen.getByPlaceholderText(
      "Введите логин пользователя"
    );
    userEvent.type(inputElement, "test");
    expect(registerMock).toHaveBeenCalledWith("userName");
  });
});
