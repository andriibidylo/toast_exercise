export const removeFormSubmissionById = (list, id) => {
  return list.filter((item) => item.id !== id);
};
