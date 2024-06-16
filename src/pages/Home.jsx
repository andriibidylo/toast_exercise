import React from "react";
import Box from "@mui/material/Box";
import { FormSubmission } from "../components/FormSubmission";
import { useSaveLikedSubmission } from "../query/useSaveLikedSubmission";
import { LikedSubmissionList } from "../components/LikedSubmissionList";

export const Home = () => {
  const { mutate, isPending } = useSaveLikedSubmission();

  return (
    <Box sx={{ marginTop: 3 }}>
      <FormSubmission mutateLinkedSubmission={mutate} />
      <LikedSubmissionList loadingLikedSubmission={isPending} />
    </Box>
  );
};
