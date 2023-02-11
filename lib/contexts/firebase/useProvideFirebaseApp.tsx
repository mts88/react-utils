// eslint-disable-next-line import/named
import { FirebaseApp, initializeApp } from 'firebase/app';
import { useState } from 'react';
import { useAppConfig } from '../../hooks/app';
import { useOnMountEffect } from '../../hooks/effects';
import { IFirebaseApp } from './IFirebaseApp';

/**
 * Hooks to provide Firebase App to Context Provider. You shouldn't use it alone.
 *
 * @returns {IFirebaseApp} provider of Firebase App
 */
export function useProvideFirebaseApp(): IFirebaseApp {
  const { firebase } = useAppConfig();
  const [firebaseApp, setFirebaseApp] = useState<FirebaseApp | undefined>();

  const getFirebaseApp = (): FirebaseApp | undefined => {
    if (!firebaseApp && firebase) {
      const app = initializeApp(firebase);
      setFirebaseApp(app);
      return app;
    } else {
      return firebaseApp;
    }
  };

  useOnMountEffect(() => {
    getFirebaseApp();
  });

  return {
    getFirebaseApp
  };
}
