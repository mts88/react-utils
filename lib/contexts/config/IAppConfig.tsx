/**
 * Interface for firebase configuration
 */
export interface IFirebaseAppConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

/**
 * Interface for base configuration of App
 */
export interface IAppConfig {
  firebase?: IFirebaseAppConfig;
}
