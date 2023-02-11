/* eslint-disable import/named */
import {
  CustomParams,
  getAnalytics,
  logEvent,
  setUserId,
  setUserProperties
} from 'firebase/analytics';
import useFirebaseApp from './useFirebaseApp';

type IUseFirebaseAnalytics = {
  /**
   * Register user by is ID.
   * @param userId Id of user
   */
  registerUser: (userId: string | null) => void;

  /**
   * Set custom properties of current user
   * @param props Properties to save
   */
  setProperties: <T extends CustomParams>(props: T) => void;

  /**
   * Register custom event for current user
   * @param event Name of event
   * @param propsEvent *Optional* - Props of this event
   */
  registerEvent: (event: string, propsEvent?: { [key: string]: unknown }) => void;
};

/**
 * Easily interact with Firebase Analytics. Exposing some simple methods to use on fly.
 * To use this hook you must use [FirebaseAppContext](../../contexts/firebase/FirebaseAppContext.tsx).
 *
 * @returns IUseFirebaseAnalytics with all methods
 */
const useFirebaseAnalytics = (): IUseFirebaseAnalytics => {
  const { getFirebaseApp } = useFirebaseApp();

  const registerUser = (userId: string | null): void => {
    const analytics = getAnalytics(getFirebaseApp());
    setUserId(analytics, userId);
  };

  const setProperties = <T extends CustomParams>(props: T): void => {
    const analytics = getAnalytics(getFirebaseApp());
    setUserProperties(analytics, props);
  };

  const registerEvent = (event: string, propsEvent?: { [key: string]: unknown }): void => {
    const analytics = getAnalytics(getFirebaseApp());
    logEvent(analytics, event, propsEvent);
  };

  return {
    registerUser,
    setProperties,
    registerEvent
  };
};

export default useFirebaseAnalytics;
