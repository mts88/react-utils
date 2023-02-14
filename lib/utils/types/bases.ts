/**
 * Helper to define type or undefined
 */
export type Maybe<T> = T | undefined;

/**
 * Helper to define type or null
 */
export type Nullable<T> = T | null;

/**
 * Define type primitive
 */
export type Primitve = string | boolean | number;

/**
 * Declare entity with id field.
 */
export type EntityId<T, D = string> = T & { id: D };

/**
 * Interface with simple value structure
 */
export type SimpleValue<T = string> = {
  value: T;
};
