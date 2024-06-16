import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FormSubmission } from '../components/FormSubmission';
import { useSaveLikedSubmission } from '../query/useSaveLikedSubmission';

export const Home = () => {
  const { mutate } = useSaveLikedSubmission();

  return (
    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>

      <Typography variant="body1" sx={{fontStyle: 'italic', marginTop: 1}}>
        TODO: List of liked submissions here (delete this line)
      </Typography>
      <FormSubmission mutateLinkedSubmission={mutate}/>
    </Box>
  );
}
