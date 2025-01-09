import { render, screen } from "@testing-library/react";
import NotFoundContent from "./NotFoundContent";

describe("NotFoundContent Component", () => {
  it("renders the component with the correct text and icon", () => {
    render(<NotFoundContent />);

    const iconElement = screen.getByRole("empty-icon");
    expect(iconElement).toBeInTheDocument();

    const textElement = screen.getByText("No Items Found");
    expect(textElement).toBeInTheDocument();

    expect(textElement).toHaveClass(
      "text-center text-sm font-medium text-[#767C85]",
    );
  });
});
