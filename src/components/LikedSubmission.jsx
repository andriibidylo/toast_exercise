import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const LikedSubmission = ({ submission }) => {
  const { email, lastName, firstName } = submission;
  return (
    <Card sx={{ minWidth: 275, mb: 1.5 }}>
      <CardContent>
        <Typography variant="h5" component="div" fontStyle="normal">
          {firstName} {lastName}
        </Typography>
        <Typography color="text.secondary" component="div" fontStyle="normal">
          {email}
        </Typography>
      </CardContent>
    </Card>
  );
};
