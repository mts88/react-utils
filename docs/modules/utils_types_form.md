[react-utils](../README.md) / [Exports](../modules.md) / utils/types/form

# Module: utils/types/form

## Table of contents

### Type Aliases

- [FormValidationRules](utils_types_form.md#formvalidationrules)

## Type Aliases

### FormValidationRules

Ƭ **FormValidationRules**<`T`\>: { [key in keyof T]?: Pick<RegisterOptions<FieldValues\>, "maxLength" \| "minLength" \| "validate" \| "required" \| "pattern"\> }

Type for Validation rules in React hook form

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[utils/types/form.ts:6](https://github.com/mts88/react-utils/blob/1b73292/lib/utils/types/form.ts#L6)
