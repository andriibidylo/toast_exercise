import { useEffect, useState } from "react";
import { onMessage } from "../service/mockServer";

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
            <div key={form.id}>`${form.data?.firstName} and ${form.data?.lastName}`</div>
        ))}
    </>
  );
};
