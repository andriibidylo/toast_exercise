import { render, screen, cleanup } from "@testing-library/react";
import { LikedSubmissionList } from "../components/LikedSubmissionList";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("ListLikedSubmissions Component", () => {
  test("renders the component with the title", () => {
    render(<LikedSubmissionList loadingLikedSubmission={false} />, {
      wrapper,
    });
    expect(screen.getByText("Liked Form Submissions")).toBeInTheDocument();
  });

  test("displays the loading spinner when loading", () => {
    render(<LikedSubmissionList loadingLikedSubmission={true} />, {
      wrapper,
    });
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
