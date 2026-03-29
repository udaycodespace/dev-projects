export const validateRequest = (data) => {
  if (!data.type || data.type.length < 3) return false;
  if (!data.description || data.description.length < 10) return false;
  return true;
};
