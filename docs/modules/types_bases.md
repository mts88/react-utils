[@mts88/react-utils](../README.md) / [Exports](../modules.md) / types/bases

# Module: types/bases

## Table of contents

### Type Aliases

- [EntityId](types_bases.md#entityid)
- [Maybe](types_bases.md#maybe)
- [Nullable](types_bases.md#nullable)
- [Primitve](types_bases.md#primitve)
- [SimpleValue](types_bases.md#simplevalue)

## Type Aliases

### EntityId

Ƭ **EntityId**<`T`, `D`\>: `T` & { `id`: `D`  }

Declare entity with id field.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `D` | `string` |

#### Defined in

[types/bases.ts:19](https://github.com/mts88/react-utils/blob/efeb83f/lib/types/bases.ts#L19)

___

### Maybe

Ƭ **Maybe**<`T`\>: `T` \| `undefined`

Helper to define type or undefined

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/bases.ts:4](https://github.com/mts88/react-utils/blob/efeb83f/lib/types/bases.ts#L4)

___

### Nullable

Ƭ **Nullable**<`T`\>: `T` \| ``null``

Helper to define type or null

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[types/bases.ts:9](https://github.com/mts88/react-utils/blob/efeb83f/lib/types/bases.ts#L9)

___

### Primitve

Ƭ **Primitve**: `string` \| `boolean` \| `number`

Define type primitive

#### Defined in

[types/bases.ts:14](https://github.com/mts88/react-utils/blob/efeb83f/lib/types/bases.ts#L14)

___

### SimpleValue

Ƭ **SimpleValue**<`T`\>: `Object`

Interface with simple value structure

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Defined in

[types/bases.ts:24](https://github.com/mts88/react-utils/blob/efeb83f/lib/types/bases.ts#L24)
