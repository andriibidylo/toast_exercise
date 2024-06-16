import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box, SnackbarContent } from "@mui/material";

export const Toast = ({
  message,
  open,
  onLike,
  onClose,
  isError = false,
  isDisable = false,
}) => {
  return (
    <Box sx={{ width: 500 }}>
      <Snackbar open={open}>
        <SnackbarContent
          action={
            <>
              {!isError && (
                <Button
                  color="inherit"
                  size="small"
                  disabled={isDisable}
                  onClick={() => onLike()}
                >
                  Like
                </Button>
              )}
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                disabled={isDisable}
                onClick={() => onClose()}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
          message={message}
          sx={{
            backgroundColor: isDisable ? "#71797E" : "#1876D1",
            color: "white",
          }}
        ></SnackbarContent>
      </Snackbar>
    </Box>
  );
};
