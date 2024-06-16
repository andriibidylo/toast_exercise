import { useEffect, useState } from "react";
import { onMessage } from "../service/mockServer";
import { Toast } from "./Toast";
import { removeFormSubmissionById } from "../utils/removeFormSubmissionById";

export const FormSubmission = ({ mutateLinkedSubmission }) => {
  const [currentFormsSubmissions, setCurrentFormsSubmissions] = useState([]);
  const [isDisableToast, setIsDisableToast] = useState(false);

  useEffect(() => {
    const handleMessage = (message) => {
      setCurrentFormsSubmissions((prev) => [...prev, message]);
    };

    onMessage(handleMessage);
  }, [setCurrentFormsSubmissions]);

  const handleLike = (currentToast) => {
    setIsDisableToast(true);
    mutateLinkedSubmission(currentToast, {
      onSuccess: () => {
        setCurrentFormsSubmissions((prev) =>
          removeFormSubmissionById(prev, currentToast.id)
        );
      },
      onSettled: () => {
        setIsDisableToast(false);
      },
    });
  };
  const handleClose = (id) => {
    setCurrentFormsSubmissions((prev) => removeFormSubmissionById(prev, id));
  };
  return (
    <>
      {currentFormsSubmissions?.length > 0 &&
        currentFormsSubmissions.map((form) => (
          <Toast
            key={form.id}
            message={`${form.data?.firstName} ${form.data?.lastName} ${form.data?.email}`}
            open={true}
            isDisable={isDisableToast}
            onLike={() => handleLike(form)}
            onClose={() => handleClose(form.id)}
          />
        ))}
    </>
  );
};
