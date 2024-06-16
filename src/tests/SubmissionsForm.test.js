import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
import { FormSubmission } from "../components/FormSubmission";
import { onMessage } from "../service/mockServer";

jest.mock("../service/mockServer", () => ({
  onMessage: jest.fn(),
}));

describe("SubmissionsForm component", () => {

  it("renders Toast components for each form submission", async () => {
    const mockForms = [
      { id: 1, data: { firstName: "John", lastName: "Doe", email: "test@gmail.com" } },
      { id: 2, data: { firstName: "Jane", lastName: "Smith",  email: "test@gmail.com"  } },
    ];

    const { queryByText } = render(
      <FormSubmission mutateLinkedSubmission={jest.fn()} />
    );

    mockForms.forEach((form) => {
      act(() => {
        onMessage.mock.calls[0][0](form);
      });
    });

    await waitFor(() => {
      expect(queryByText("John Doe test@gmail.com")).toBeInTheDocument();
      expect(queryByText("Jane Smith test@gmail.com")).toBeInTheDocument();
    });
  });

  it("handles liking a form submission", async () => {
    const mockForms = [{ id: 1, data: { firstName: "John", lastName: "Doe", email: "test@gmail.com" } }];

    const mockMutateLinkedSubmission = jest.fn();

    const { findByRole } = render(
      <FormSubmission mutateLinkedSubmission={mockMutateLinkedSubmission} />
    );

    mockForms.forEach((form) => {
      act(() => {
        onMessage.mock.calls[0][0](form);
      });
    });

    const likeButton = await findByRole("button", { name: /Like/i });

    act(() => {
      fireEvent.click(likeButton);
    });

    await waitFor(() => {
      expect(mockMutateLinkedSubmission).toHaveBeenCalledWith(
        mockForms[0],
        expect.objectContaining({
          onSuccess: expect.any(Function),
          onSettled: expect.any(Function),
        })
      );
    });
  });

  it("handles closing a form submission", async () => {
    const mockForms = [
      { id: 1, data: { firstName: "John", lastName: "Doe", email: "test@gmail.com" } }
    ];


    const { findByRole, queryByText } = render(
      <FormSubmission mutateLinkedSubmission={jest.fn()} />
    );

    mockForms.forEach((form) => {
      act(() => {
        onMessage.mock.calls[0][0](form);
      });
    });

    const closeButton = await findByRole("button", { name: /close/i });

    act(() => {
      fireEvent.click(closeButton);
    });

    await waitFor(() => {
      expect(queryByText("John Doe test@gmail.com")).not.toBeInTheDocument();
    });
  });
});
