[react-utils](../README.md) / [Exports](../modules.md) / utils/types/react

# Module: utils/types/react

## Table of contents

### Type Aliases

- [ActionProps](utils_types_react.md#actionprops)
- [PickActionProps](utils_types_react.md#pickactionprops)

## Type Aliases

### ActionProps

Ƭ **ActionProps**: `Object`

Define multiple common action

#### Type declaration

| Name | Type |
| :------ | :------ |
| `onActionClick?` | () => `void` |
| `onCancel?` | () => `void` |
| `onClick?` | () => `void` |
| `onClose?` | () => `void` |
| `onConfirm?` | () => `void` |
| `onDelete?` | <T\>(`id`: `T`, `name?`: `string`) => `void` |
| `onSearchChange?` | (`text`: `string`) => `void` |
| `onSelect?` | <T\>(`element`: `T`) => `void` |
| `onSelectChange?` | (`selection`: `string`) => `void` |

#### Defined in

[utils/types/react.ts:4](https://github.com/mts88/react-utils/blob/1b73292/lib/utils/types/react.ts#L4)

___

### PickActionProps

Ƭ **PickActionProps**<`K`\>: `Pick`<[`ActionProps`](utils_types_react.md#actionprops), `K`\>

Pick easly from [ActionProps](utils_types_react.md#actionprops)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`ActionProps`](utils_types_react.md#actionprops) |

#### Defined in

[utils/types/react.ts:19](https://github.com/mts88/react-utils/blob/1b73292/lib/utils/types/react.ts#L19)
