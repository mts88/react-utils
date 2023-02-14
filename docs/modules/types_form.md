[react-utils](../README.md) / [Exports](../modules.md) / types/form

# Module: types/form

## Table of contents

### Type Aliases

- [FormValidationRules](types_form.md#formvalidationrules)

## Type Aliases

### FormValidationRules

Ƭ **FormValidationRules**<`T`\>: { [key in keyof T]?: Pick<RegisterOptions<FieldValues\>, "maxLength" \| "minLength" \| "validate" \| "required" \| "pattern"\> }

Type for Validation rules in React hook form

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/form.ts:6](https://github.com/mts88/react-utils/blob/81dab9f/lib/types/form.ts#L6)
