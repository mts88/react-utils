/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
import { useEffect, useRef } from 'react';

/**
 * Execute onMountFunc when component is mounted. Avoid double execution of React 18+' useEffect.
 *
 * @param onMountFunc Function to execute onMount of component.
 * @param onUnmountFunc *Optional* - Function executed onUnMount of component.
 * @param deps *Optional* - Effect dependencies
 *
 * @example
 * ```
 *  const MyComponent = () => {
 *
 *      const [ counter, setCounter ] = useState(0)
 *
 *       useOnMountEffect(
 *          // on mount
 *          () => {
 *              setCounter(1)
 *          },
 *          // on unmount
 *          () => {
 *              setCounter(0)
 *          }
 *       )
 *  }
 *
 * ```
 */
export const useOnMountEffect = <T,>(
  onMountFunc: Function,
  onUnmountFunc: Function = () => {},
  deps: T[] = []
): void => {
  const mount = useRef(false);
  useEffect(() => {
    if (!mount.current) {
      onMountFunc();
    }
    return () => {
      if (mount.current) {
        onUnmountFunc();
      }
      mount.current = true;
    };
  }, deps);
};
