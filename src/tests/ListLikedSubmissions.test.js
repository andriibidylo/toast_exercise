import { render, screen, cleanup } from "@testing-library/react";
import { ListLikedSubmissions } from "../components/ListLikedSubmissions";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("ListLikedSubmissions Component", () => {
  test("renders the component with the title", () => {
    render(<ListLikedSubmissions loadingLikedSubmission={false} />, {
      wrapper,
    });
    expect(screen.getByText("Liked Form Submissions")).toBeInTheDocument();
  });

  test("displays the loading spinner when loading", () => {
    render(<ListLikedSubmissions loadingLikedSubmission={true} />, {
      wrapper,
    });
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
