import { useContext } from 'react';
import { FirebaseAppContext, IFirebaseApp } from '../../contexts/firebase';

/**
 * Hook to use Firebase App
 * @returns FirebaseAppContext
 */
const useFirebaseApp = (): IFirebaseApp => {
  return useContext(FirebaseAppContext);
};

export default useFirebaseApp;
