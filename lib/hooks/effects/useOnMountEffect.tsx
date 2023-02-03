/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
import { useEffect, useRef } from 'react'

/**
 * Act only on mount of component, avoid double execution of React 18+ useEffect
 *
 *
 * @param onMountFunc Function executed on mount
 * @param onUnmountFunc Function executed on unMount
 * @param deps Optionals dependencies of effect
 *
 * @example
 * ```
 *  const [counter, setCounter] = useState(0)
 *
 *  useOnMountEffect(
 *    () => {
 *      // on mount
 *      setCounter(1)
 *    },
 *    () => {
 *      // on unMount
 *      setCounter(0)
 *    }
 * )
 * ```
 *
 */
const useOnMountEffect = <T,>(
  onMountFunc: Function,
  onUnmountFunc: Function = () => {},
  deps: T[] = [],
): void => {
  const mount = useRef(false)
  useEffect(() => {
    if (!mount.current) {
      onMountFunc()
    }
    return () => {
      if (mount.current) {
        onUnmountFunc()
      }
      mount.current = true
    }
  }, deps)
}

export default useOnMountEffect
