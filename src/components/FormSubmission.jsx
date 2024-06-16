import { useEffect, useState } from "react";
import { onMessage } from "../service/mockServer";
import { Toast } from "./Toast";

export const FormSubmission = ({mutateLinkedSubmission}) => {
  const [currentFormsSubmissions, setCurrentFormsSubmissions] = useState([]);

  useEffect(() => {

    const handleMessage = (message) => {
      setCurrentFormsSubmissions((prev) => [...prev, message]);
    };

    onMessage(handleMessage);
  }, [setCurrentFormsSubmissions]);


  const handleLike = (currentToast) => {
    mutateLinkedSubmission(currentToast, {
      onSuccess: () => {
        setCurrentFormsSubmissions((prev) =>
          prev.filter((item) => item.id !== currentToast.id)
        );
      },
    });
  };
  return (
    <>
      {currentFormsSubmissions?.length > 0 &&
        currentFormsSubmissions.map((form) => (
            <Toast
            key={form.id}
            message={`${form.data?.firstName} ${form.data?.lastName} ${form.data?.email}`}
            open={true}
            onLike={() => handleLike(form)}
          />
        ))}
    </>
  );
};
