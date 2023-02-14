[react-utils](../README.md) / [Exports](../modules.md) / functions/types

# Module: functions/types

## Table of contents

### Functions

- [getValue](functions_types.md#getvalue)
- [isNotNull](functions_types.md#isnotnull)
- [isNotUndefined](functions_types.md#isnotundefined)
- [isNull](functions_types.md#isnull)
- [isPrimitve](functions_types.md#isprimitve)
- [isUndefined](functions_types.md#isundefined)

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
| `obj` | [`SimpleValue`](types_bases.md#simplevalue)<`T`\> | Object source |

#### Returns

`T`

value of object

#### Defined in

[functions/types.ts:51](https://github.com/mts88/react-utils/blob/81dab9f/lib/functions/types.ts#L51)

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
| `obj` | [`Nullable`](types_bases.md#nullable)<`T`\> | Object to check |

#### Returns

`boolean`

Element is not null or is it

#### Defined in

[functions/types.ts:33](https://github.com/mts88/react-utils/blob/81dab9f/lib/functions/types.ts#L33)

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
| `obj` | [`Maybe`](types_bases.md#maybe)<`T`\> | Object to check |

#### Returns

`boolean`

Element is defined

#### Defined in

[functions/types.ts:17](https://github.com/mts88/react-utils/blob/81dab9f/lib/functions/types.ts#L17)

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
| `obj` | [`Nullable`](types_bases.md#nullable)<`T`\> | Object to check |

#### Returns

`boolean`

Element is null or not

#### Defined in

[functions/types.ts:25](https://github.com/mts88/react-utils/blob/81dab9f/lib/functions/types.ts#L25)

___

### isPrimitve

▸ **isPrimitve**(`obj`): `boolean`

Check if element is primitive

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Primitve`](types_bases.md#primitve) | Object to check |

#### Returns

`boolean`

Element is primite or not

#### Defined in

[functions/types.ts:41](https://github.com/mts88/react-utils/blob/81dab9f/lib/functions/types.ts#L41)

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
| `obj` | [`Maybe`](types_bases.md#maybe)<`T`\> | Object to check |

#### Returns

`boolean`

Element is undefined

#### Defined in

[functions/types.ts:9](https://github.com/mts88/react-utils/blob/81dab9f/lib/functions/types.ts#L9)
