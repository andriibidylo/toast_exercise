import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, SnackbarContent } from "@mui/material";

export const Toast = ({ message, open}) => {
  return (
    <Box sx={{ width: 500 }}>
      <Snackbar open={open}>
        <SnackbarContent
          action={
            <>
                <Button
                  color="inherit"
                  size="small"
                >
                  Like
                </Button>
   
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
          message={message}
          sx={{
            color: "white",
          }}
        ></SnackbarContent>
      </Snackbar>
    </Box>
  );
};
