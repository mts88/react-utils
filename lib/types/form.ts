import { FieldValues, RegisterOptions } from 'react-hook-form';

/**
 * Type for Validation rules in React hook form
 */
export type FormValidationRules<T> = {
  [key in keyof T]?: Pick<
    RegisterOptions<FieldValues>,
    'maxLength' | 'minLength' | 'validate' | 'required' | 'pattern'
  >;
};
