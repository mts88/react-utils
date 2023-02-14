// eslint-disable-next-line import/named
import { fetchConfig, getAll, getRemoteConfig } from 'firebase/remote-config';
import useFirebaseApp from './useFirebaseApp';

type IUseFirebaseRemoteConfig = {
  /**
   * Get remote config from Firebase. You must define expected type.
   */
  getRemoteConfig: <T>() => Promise<T>;
};

/**
 * Easily interact with Firebase Remote Config. Exposing some simple methods to use on fly.
 * To use this hook you must use [FirebaseAppContext](../../contexts/firebase/FirebaseAppContext.tsx).
 *
 * @returns IUseFirebaseRemoteConfig with all methods
 */
export const useFirebaseRemoteConfig = (): IUseFirebaseRemoteConfig => {
  const { getFirebaseApp } = useFirebaseApp();

  const getConfig = async <T,>(): Promise<T> => {
    const remoteConfig = getRemoteConfig(getFirebaseApp());
    remoteConfig.settings.minimumFetchIntervalMillis = 3600000;

    await fetchConfig(remoteConfig);

    const configs = getAll(remoteConfig);
    return Object.keys(configs).reduce(
      (config, current): T => ({
        ...config,
        [current]: configs[current]?.asBoolean() as boolean
      }),
      {} as T
    );
  };

  return {
    getRemoteConfig: getConfig
  };
};
