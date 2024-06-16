import { useMutation } from "@tanstack/react-query";
import { saveLikedFormSubmission } from "../service/mockServer";

export const useSaveLikedSubmission = () => {

  const mutationFn = async (currentToast) => {
    await saveLikedFormSubmission(currentToast);
  };

  return useMutation({
    mutationFn,
    mutationKey: ["save_liked_submission"],
  });
};
