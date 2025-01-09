import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DropdownSearch from "./DropdownSearch";

describe("DropdownSearch Component", () => {
  const mockOnChange = jest.fn();
  const props = {
    label: "Select Currency",
    name: "currency",
    anotherExchange: "USD",
    items: ["USD", "EUR", "GBP", "JPY"],
    placeholder: "Choose a currency",
    value: "EUR",
    onChange: mockOnChange,
  };

  it("renders the dropdown with the correct label and placeholder", () => {
    render(<DropdownSearch {...props} />);
    expect(screen.getByText("Select Currency")).toBeInTheDocument();
    expect(screen.getByText("EUR")).toBeInTheDocument();
  });

  it("toggles the dropdown visibility when clicked", () => {
    render(<DropdownSearch {...props} />);
    const button = screen.getByRole("button", { name: "EUR" });

    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("filters items based on the search term", () => {
    render(<DropdownSearch {...props} />);
    const button = screen.getByRole("button", { name: "EUR" });

    fireEvent.click(button);

    const searchInput = screen.getByPlaceholderText("Search item");
    fireEvent.change(searchInput, { target: { value: "GBP" } });

    expect(screen.getByText("GBP")).toBeInTheDocument();
    expect(screen.queryByText("USD")).not.toBeInTheDocument();
  });

  it("calls onChange when an item is selected", () => {
    render(<DropdownSearch {...props} />);
    const button = screen.getByRole("button", { name: "EUR" });

    fireEvent.click(button);

    const item = screen.getByText("GBP");
    fireEvent.click(item);

    expect(mockOnChange).toHaveBeenCalledWith("GBP");
  });

  it("closes the dropdown when clicking outside", () => {
    render(<DropdownSearch {...props} />);
    const button = screen.getByRole("button", { name: "EUR" });

    fireEvent.click(button);
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    fireEvent.mouseDown(document.body);

    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("renders the NoContentContainer when no items match the search", () => {
    render(<DropdownSearch {...props} />);
    const button = screen.getByRole("button", { name: "EUR" });

    fireEvent.click(button);

    const searchInput = screen.getByPlaceholderText("Search item");
    fireEvent.change(searchInput, { target: { value: "XYZ" } });

    expect(screen.getByText(/No Items Found/i)).toBeInTheDocument();
  });
});
