// eslint-disable-next-line import/named
import { FirebaseApp } from 'firebase/app';

/**
 * Interface of Context
 */
export interface IFirebaseApp {
  getFirebaseApp: () => FirebaseApp | undefined;
}
