export const formatCardNumber = (cc_number: string) => {
  if (cc_number.length <= 0) return cc_number;
  if (cc_number.includes("-")) cc_number.split("-").join("");
  if (cc_number.includes(" ")) cc_number.split(" ").join("");
  return cc_number;
};

export const formatExpiration = (expiration: string) => {
  if (expiration.length <= 0 || !expiration.includes("-")) return expiration;
  return expiration.split("-");
};
