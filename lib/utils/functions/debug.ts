/**
 * Trace function for debugging purpose
 *
 * @param tag Tag to attach to log
 * @param x Param to log
 * @returns Param logged
 */
export const trace = <T>(tag: string, x: T): T => {
  // eslint-disable-next-line no-console
  console.log(tag, x);
  return x;
};
