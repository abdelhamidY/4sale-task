import React from "react";
import { render, screen } from "@testing-library/react";
import NoContentContainer from "./NoContentContainer";
describe("NoContentContainer Component", () => {
  const mockNoContentComponent = <div>No Content Available</div>;

  it("renders the noContentComponent when items array is empty", () => {
    render(
      <NoContentContainer
        items={[]}
        noContentComponent={mockNoContentComponent}
      >
        <div>Child Content</div>
      </NoContentContainer>,
    );

    expect(screen.getByText("No Content Available")).toBeInTheDocument();
    expect(screen.queryByText("Child Content")).not.toBeInTheDocument();
  });

  it("renders children when items array is not empty", () => {
    render(
      <NoContentContainer
        items={["Item 1"]}
        noContentComponent={mockNoContentComponent}
      >
        <div>Child Content</div>
      </NoContentContainer>,
    );

    expect(screen.getByText("Child Content")).toBeInTheDocument();
    expect(screen.queryByText("No Content Available")).not.toBeInTheDocument();
  });
});
