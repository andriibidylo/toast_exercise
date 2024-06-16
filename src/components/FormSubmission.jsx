import { useEffect, useState } from "react";
import { onMessage } from "../service/mockServer";
import { Toast } from "./Toast";

export const FormSubmission = () => {
  const [currentFormsSubmissions, setCurrentFormsSubmissions] = useState([]);

  useEffect(() => {
    const handleMessage = (message) => {
      setCurrentFormsSubmissions((prev) => [...prev, message]);
    };
    onMessage(handleMessage);
  }, [setCurrentFormsSubmissions]);


  return (
    <>
      {currentFormsSubmissions?.length > 0 &&
        currentFormsSubmissions.map((form) => (
            <Toast
            key={form.id}
            message={`${form.data?.firstName} ${form.data?.lastName} ${form.data?.email}`}
            open={true}
          />
        ))}
    </>
  );
};
