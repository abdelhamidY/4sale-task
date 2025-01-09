import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input Component", () => {
  it("renders the Input component with label and input field", () => {
    render(<Input name="test" label="Test Label" className="test-class" />);

    expect(screen.getByText("Test Label")).toBeInTheDocument();

  });

  it("allows valid keys (digits, Backspace, Delete, Arrow keys, Tab, and a single dot)", async () => {
    render(<Input name="test" label="Test Label" />);

    const input = screen.getByRole("textbox");
    const user = userEvent.setup();

    await user.type(input, "123");
    expect(input).toHaveValue("123");

    await user.type(input, ".");
    expect(input).toHaveValue("123.");

    await user.type(input, "4");
    expect(input).toHaveValue("123.4");

    await user.type(input, "{backspace}");
    expect(input).toHaveValue("123.");

    await user.type(input, "{arrowleft}");
    await user.type(input, "{arrowright}");
  });

  it("prevents invalid keys (letters, special characters, multiple dots)", async () => {
    render(<Input name="test" label="Test Label" />);

    const input = screen.getByRole("textbox");
    const user = userEvent.setup();

    await user.type(input, "abc");
    expect(input).toHaveValue("");

    await user.type(input, "123..");
    expect(input).toHaveValue("123.");

    await user.type(input, "!@#");
    expect(input).toHaveValue("123.");
  });

  it("handles clearing the input correctly", async () => {
    render(<Input name="test" label="Test Label" />);

    const input = screen.getByRole("textbox");
    const user = userEvent.setup();

    await user.type(input, "123.4");
    expect(input).toHaveValue("123.4");

    await user.clear(input);
    expect(input).toHaveValue("");
  });
});
