import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader Component", () => {
  it("renders the loading spinner and message when `isLoading` is true", () => {
    render(<Loader isLoading />);

    const spinner = screen.getByRole("svg", { hidden: true });
    expect(spinner).toBeInTheDocument();

    const loadingMessage = screen.getByText("Loading...");
    expect(loadingMessage).toBeInTheDocument();
  });

  it("renders an error message and retry button when `error` is true", () => {
    const mockRetry = jest.fn();
    render(<Loader error retry={mockRetry} />);

    const errorMessage = screen.getByText("Error!");
    expect(errorMessage).toBeInTheDocument();

    const retryButton = screen.getByText("Retry");
    expect(retryButton).toBeInTheDocument();

    fireEvent.click(retryButton);
    expect(mockRetry).toHaveBeenCalledTimes(1);
  });

  it("renders a timeout message and retry button when `timedOut` is true", () => {
    const mockRetry = jest.fn();
    render(<Loader timedOut retry={mockRetry} />);

    const timeoutMessage = screen.getByText("Taking a long time...");
    expect(timeoutMessage).toBeInTheDocument();

    const retryButton = screen.getByText("Retry");
    expect(retryButton).toBeInTheDocument();

    fireEvent.click(retryButton);
    expect(mockRetry).toHaveBeenCalledTimes(1);
  });

  it("renders a delay message when `pastDelay` is true", () => {
    render(<Loader pastDelay />);

    const delayMessage = screen.getByText("Loading...");
    expect(delayMessage).toBeInTheDocument();
  });

  it("renders nothing when no props are set or applicable", () => {
    render(<Loader />);

    const loaderContainer = screen.queryByText("Loading...");
    expect(loaderContainer).not.toBeInTheDocument();
  });
});
