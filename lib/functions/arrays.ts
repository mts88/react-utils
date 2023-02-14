/**
 * Check if array or string is empty.
 *
 * @param element Array to check
 * @returns Is empty or not
 */
export const isEmpty = <T>(element: T[] | string): boolean => {
  if (typeof element === 'string') {
    return element === '';
  }
  return element.length === 0;
};
