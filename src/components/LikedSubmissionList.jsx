import { Box, CircularProgress, Typography } from "@mui/material";
import { useFetchLikedSubmissions } from "../query/useFetchLikedSubmissions";
import { LikedSubmission } from "./LikedSubmission";
import { useMemo } from "react";

export const LikedSubmissionList = ({ loadingLikedSubmission }) => {
  const {
    data: likedSubmissions,
    isRefetching,
    isLoading,
  } = useFetchLikedSubmissions();

  const sortedSubmissions = useMemo(() => {
    if (likedSubmissions) {
      return [...likedSubmissions].reverse();
    }
  }, [likedSubmissions]);

  return (
    <>
      <Typography variant="h4">Liked Form Submissions</Typography>
      {(isRefetching || isLoading || loadingLikedSubmission) && (
        <Box textAlign="center" mt={2}>
          <CircularProgress />
        </Box>
      )}
      {likedSubmissions &&
        sortedSubmissions.map((submission) => (
          <LikedSubmission key={submission.id} submission={submission.data} />
        ))}
    </>
  );
};
