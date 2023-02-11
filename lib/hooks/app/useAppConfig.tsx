import { useContext } from 'react';
import { AppConfigContext } from '../../contexts/config/AppConfigContext';
import { IAppConfig } from '../../contexts/config/IAppConfig';

/**
 * Hook to use AppConfigContext
 * @returns AppConfigContext
 *
 * @example
 * ```
 *  const MyComponent = () => {
 *
 *      const config = useAppConfig()
 *
 *       return (
 *          <>{config.myField}</>
 *       )
 *  }
 *
 * ```
 */
const useAppConfig = (): IAppConfig => {
  return useContext(AppConfigContext);
};

export default useAppConfig;
