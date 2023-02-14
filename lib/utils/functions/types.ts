import { Maybe, Nullable, Primitve, SimpleValue } from './../types/bases';

/**
 * Check if element is undefined or not
 *
 * @param obj Object to check
 * @returns Element is undefined
 */
export const isUndefined = <T>(obj: Maybe<T>): boolean => (obj ? false : true);

/**
 * Check if element is defined or not
 *
 * @param obj Object to check
 * @returns Element is defined
 */
export const isNotUndefined = <T>(obj: Maybe<T>): boolean => !isUndefined(obj);

/**
 * Check if element is null or not
 *
 * @param obj Object to check
 * @returns Element is null or not
 */
export const isNull = <T>(obj: Nullable<T>): boolean => obj === null;

/**
 * Check if element is not null
 *
 * @param obj Object to check
 * @returns Element is not null or is it
 */
export const isNotNull = <T>(obj: Nullable<T>): boolean => !isNull(obj);

/**
 * Check if element is primitive
 *
 * @param obj Object to check
 * @returns Element is primite or not
 */
export const isPrimitve = (obj: Primitve): boolean => {
  return typeof obj === 'string' || typeof obj === 'boolean' || typeof obj === 'number';
};

/**
 * Get easily value from object
 *
 * @param obj Object source
 * @returns value of object
 */
export const getValue = <T>(obj: SimpleValue<T>): T => obj.value;
