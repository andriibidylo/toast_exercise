import React, { useState } from 'react';
import { Toast } from '../Toast';


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
      message={toast.message}
      open={toast.open}
      onClose={hideToast}
    />
  ) : null;

  return { showError, ErrorComponent };
};
