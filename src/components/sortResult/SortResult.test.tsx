import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SortResult from "./SortResult";

describe("Sort result of search", () => {
  test("renders correctly", () => {
    const handleOrderChange = jest.fn();
    render(
      <SortResult handleOrderChange={handleOrderChange} selectedOrder="desc" />
    );

    const repositoriesText = screen.getByText("Репозитории:");
    const ascendingOption = screen.getByText("по возрастанию");
    const descendingOption = screen.getByText("по убыванию");

    expect(repositoriesText).toBeInTheDocument();
    expect(ascendingOption).toBeInTheDocument();
    expect(descendingOption).toBeInTheDocument();
  });

  test("handles order change desc to asc", () => {
    const handleOrderChange = jest.fn();
    render(
      <SortResult handleOrderChange={handleOrderChange} selectedOrder="desc" />
    );

    const ascendingOption = screen.getByText("по убыванию");

    fireEvent.click(ascendingOption);
    expect(handleOrderChange).toHaveBeenCalledWith("asc");
  });

  test("handles order change asc to desc", () => {
    const handleOrderChange = jest.fn();
    render(
      <SortResult handleOrderChange={handleOrderChange} selectedOrder="asc" />
    );

    const descendingOption = screen.getByText("по возрастанию");

    fireEvent.click(descendingOption);
    expect(handleOrderChange).toHaveBeenCalledWith("desc");
  });
});
