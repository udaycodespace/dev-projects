export const isSessionValid = () => {
  const token = localStorage.getItem("session");
  return !!token;
};
