let lastCall = 0;

export const canCallAPI = () => {
  const now = Date.now();
  if (now - lastCall < 2000) return false;
  lastCall = now;
  return true;
};
