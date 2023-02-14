import { createContext } from 'react';
import { IAppConfig } from './IAppConfig';
import { useProvideAppConfig } from './useProvideAppConfig';

/**
 * Create initial context
 */
export const AppConfigContext = createContext<IAppConfig>({} as IAppConfig);

/**
 * Create Provider for App Config Context
 *
 * @example Without custom configuration
 * ```
 *
 *  const MyComponent = () => {
 *
 *       return (
 *          <AppConfigProvider>
 *            <MyOtherAppPart />
 *          </AppConfigProvider>
 *       )
 *  }
 * ```
 *
 * @example With custom configuration
 * ```
 *  interface MyAppConfig extends IAppConfig;
 *
 *  const MyComponent = () => {
 *
 *      const config: Partial<MyAppConfig> = {
 *          appName: 'My App Name'
 *       }
 *
 *       return (
 *          <AppConfigProvider configuration={config}>
 *            <MyOtherAppPart />
 *          </AppConfigProvider>
 *       )
 *  }
 * ```
 *
 * .... in other component
 *
 * ```
 *  const MyOtherComponent = () => {
 *
 *      const config = useAppConfig()
 *
 *       return (
 *          <>{config.appName}</>
 *       )
 *  }
 *
 * ```
 */
export function AppConfigProvider({
  children,
  configuration
}: {
  children: React.ReactNode;
  configuration?: Partial<IAppConfig>;
}): JSX.Element {
  const value = useProvideAppConfig(configuration);
  return <AppConfigContext.Provider value={value}>{children}</AppConfigContext.Provider>;
}
