import { createContext } from 'react';
import { IAppConfig } from './IAppConfig';
import { useProvideAppConfig } from './useProvideAppConfig';

/**
 * Create initial context
 */
export const AppConfigContext = createContext<IAppConfig>({});

/**
 * Create Provider for App Config Context
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
