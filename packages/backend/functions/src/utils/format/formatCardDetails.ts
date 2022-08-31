export const formatCardNumber = (ccNumber: string) => {
  if (ccNumber.length <= 0) return ccNumber;
  if (ccNumber.includes("-")) ccNumber.split("-").join("");
  if (ccNumber.includes(" ")) ccNumber.split(" ").join("");
  return ccNumber;
};

export const formatExpiration = (expiration: string) => {
  const expMonth = expiration.split("-")[1];
  const expYear = expiration.split("-")[0];
  return {
    expMonth,
    expYear,
  };
};
