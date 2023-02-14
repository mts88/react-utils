[react-utils](../README.md) / [Exports](../modules.md) / utils/functions/types

# Module: utils/functions/types

## Table of contents

### Functions

- [getValue](utils_functions_types.md#getvalue)
- [isNotNull](utils_functions_types.md#isnotnull)
- [isNotUndefined](utils_functions_types.md#isnotundefined)
- [isNull](utils_functions_types.md#isnull)
- [isPrimitve](utils_functions_types.md#isprimitve)
- [isUndefined](utils_functions_types.md#isundefined)

## Functions

### getValue

▸ **getValue**<`T`\>(`obj`): `T`

Get easily value from object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`SimpleValue`](utils_types_bases.md#simplevalue)<`T`\> | Object source |

#### Returns

`T`

value of object

#### Defined in

[utils/functions/types.ts:51](https://github.com/mts88/react-utils/blob/1b73292/lib/utils/functions/types.ts#L51)

___

### isNotNull

▸ **isNotNull**<`T`\>(`obj`): `boolean`

Check if element is not null

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Nullable`](utils_types_bases.md#nullable)<`T`\> | Object to check |

#### Returns

`boolean`

Element is not null or is it

#### Defined in

[utils/functions/types.ts:33](https://github.com/mts88/react-utils/blob/1b73292/lib/utils/functions/types.ts#L33)

___

### isNotUndefined

▸ **isNotUndefined**<`T`\>(`obj`): `boolean`

Check if element is defined or not

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Maybe`](utils_types_bases.md#maybe)<`T`\> | Object to check |

#### Returns

`boolean`

Element is defined

#### Defined in

[utils/functions/types.ts:17](https://github.com/mts88/react-utils/blob/1b73292/lib/utils/functions/types.ts#L17)

___

### isNull

▸ **isNull**<`T`\>(`obj`): `boolean`

Check if element is null or not

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Nullable`](utils_types_bases.md#nullable)<`T`\> | Object to check |

#### Returns

`boolean`

Element is null or not

#### Defined in

[utils/functions/types.ts:25](https://github.com/mts88/react-utils/blob/1b73292/lib/utils/functions/types.ts#L25)

___

### isPrimitve

▸ **isPrimitve**(`obj`): `boolean`

Check if element is primitive

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Primitve`](utils_types_bases.md#primitve) | Object to check |

#### Returns

`boolean`

Element is primite or not

#### Defined in

[utils/functions/types.ts:41](https://github.com/mts88/react-utils/blob/1b73292/lib/utils/functions/types.ts#L41)

___

### isUndefined

▸ **isUndefined**<`T`\>(`obj`): `boolean`

Check if element is undefined or not

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Maybe`](utils_types_bases.md#maybe)<`T`\> | Object to check |

#### Returns

`boolean`

Element is undefined

#### Defined in

[utils/functions/types.ts:9](https://github.com/mts88/react-utils/blob/1b73292/lib/utils/functions/types.ts#L9)
