import { render } from "@testing-library/react";
import { LikedSubmission } from "../components/LikedSubmission";

describe("LikedSubmission Component", () => {
  const submission = {
    email: "test@example.com",
    firstName: "John",
    lastName: "Doe",
  };

  test("renders submission details correctly", () => {
    const { getByText } = render(<LikedSubmission submission={submission} />);

    expect(getByText("John Doe")).toBeInTheDocument();
    expect(getByText("test@example.com")).toBeInTheDocument();
  });
});
