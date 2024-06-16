// queryClientSetup.js
import { QueryClient } from "@tanstack/react-query";

export const setupQueryClient = (showError) => {
  const queryClient = new QueryClient();
  queryClient.setDefaultOptions({
    mutations: {
      onError: (error) => {
        showError(true, error.message || "An error occurred");
      },
    },
  });

  return queryClient;
};
