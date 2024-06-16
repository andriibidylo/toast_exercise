import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, SnackbarContent } from "@mui/material";

export const Toast = ({ message, open, onLike, onClose }) => {
  return (
    <Box sx={{ width: 500 }}>
      <Snackbar open={open}>
        <SnackbarContent
          action={
            <>
              <Button color="inherit" size="small" onClick={() => onLike()}>
                Like
              </Button>

              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => onClose()}
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
