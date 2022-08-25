/**
 * @param {string} phoneNumber String format of phone number to format
 * @return {string} ###-###-#### || (#)###-###-####
 */
export function formatPhone(phoneNumber: string): string {
  if (phoneNumber.length === 0) {
    return "";
  }
  const nums = phoneNumber.match(/[0-9]/g);
  let parts: string[] = [];
  let formatted = "";
  if (nums != null) {
    const s = nums.join("");
    switch (s.length) {
      case 10:
        parts = [s.slice(0, 3), s.slice(3, 6), s.slice(6)];
        formatted = parts.join("-");
        break;
      case 11:
        parts = [s.slice(1, 4), s.slice(4, 7), s.slice(7)];
        formatted = `(${s.slice(0, 1)})${parts.join("-")}`;
        break;
      default:
        formatted = s;
        break;
    }
  }
  return formatted;
}
