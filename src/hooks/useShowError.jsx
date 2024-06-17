import React, { useState } from "react";
import { Toast } from "../components/Toast";

export const useShowError = () => {
  const [toast, setToast] = useState(null);

  const showError = (isError, message) => {
    setToast({ isError, message, open: true });
  };

  const hideToast = () => {
    setToast(null);
  };

  const ErrorComponent = toast ? (
    <Toast
      isError={toast.isError}
      message={`Ooooops: ${toast.message}. Please close this popup and try again.`}
      open={toast.open}
      onClose={hideToast}
    />
  ) : null;

  return { showError, ErrorComponent };
};
