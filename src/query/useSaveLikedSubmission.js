import { useMutation, useQueryClient } from "@tanstack/react-query";
import { saveLikedFormSubmission } from "../service/mockServer";

export const useSaveLikedSubmission = () => {
  const queryClient = useQueryClient();

  const mutationFn = async (currentToast) => {
    await saveLikedFormSubmission(currentToast);
  };

  return useMutation({
    mutationFn,
    mutationKey: ["save_liked_submission"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["liked_submissions"] });
    },
  });
};
