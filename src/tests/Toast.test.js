import { fireEvent, render, screen } from "@testing-library/react";
import { Toast } from "../components/Toast";

describe("Toast Component", () => {
  const defaultProps = {
    message: "This is a test message",
    open: true,
    onClose: jest.fn(),
    onLike: jest.fn(),
    isError: false,
    isDisable: false,
  };

  test("renders the Toast component with message", () => {
    render(<Toast {...defaultProps} />);
    expect(screen.getByText(defaultProps.message)).toBeInTheDocument();
  });

  test("renders the Like button when isError is false", () => {
    render(<Toast {...defaultProps} />);
    expect(screen.getByText(/like/i)).toBeInTheDocument();
  });

  test("does not render the Like button when isError is true", () => {
    render(<Toast {...defaultProps} isError={true} />);
    expect(screen.queryByText(/like/i)).not.toBeInTheDocument();
  });

  test("disables buttons when isDisable is true", () => {
    render(<Toast {...defaultProps} isDisable={true} />);
    expect(screen.getByLabelText(/close/i)).toBeDisabled();
    if (!defaultProps.isError) {
      expect(screen.getByText(/like/i)).toBeDisabled();
    }
  });

  test("calls onClose when Close button is clicked", () => {
    render(<Toast {...defaultProps} />);
    fireEvent.click(screen.getByLabelText(/close/i));
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  test("calls onLike when Like button is clicked", () => {
    render(<Toast {...defaultProps} />);
    fireEvent.click(screen.getByText(/like/i));
    expect(defaultProps.onLike).toHaveBeenCalled();
  });

  test("applies the correct styles based on isDisable", () => {
    render(<Toast {...defaultProps} isDisable={true} />);
    const snackbarContent = screen.getByText(
      defaultProps.message
    ).parentElement;
    expect(snackbarContent).toHaveStyle("background-color: #71797E");
  });

  test("applies the correct styles when isDisable is false", () => {
    render(<Toast {...defaultProps} isDisable={false} />);
    const snackbarContent = screen.getByText(
      defaultProps.message
    ).parentElement;
    expect(snackbarContent).toHaveStyle("background-color: #1876D1");
  });
});
