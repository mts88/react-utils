/**
 * Check if two strings are equal ignoring case
 * @param a String one
 * @param b Another string
 * @returns boolean
 */
export const equalIgnoreCase = (a: string, b: string): boolean => {
  return a.toLowerCase() === b.toLowerCase();
};
