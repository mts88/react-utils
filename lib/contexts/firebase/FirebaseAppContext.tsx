import { createContext } from 'react';
import { IFirebaseApp } from './IFirebaseApp';
import { useProvideFirebaseApp } from './useProvideFirebaseApp';

/**
 * Create initial context
 */
export const FirebaseAppContext = createContext<IFirebaseApp>({} as IFirebaseApp);

/**
 * Create Provider for Firebase App Context
 */
export function FirebaseAppProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const value = useProvideFirebaseApp();
  return <FirebaseAppContext.Provider value={value}>{children}</FirebaseAppContext.Provider>;
}
