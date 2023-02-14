[@mts88/react-utils](../README.md) / [Exports](../modules.md) / hooks/data/useDebouncedFilter

# Module: hooks/data/useDebouncedFilter

## Table of contents

### Type Aliases

- [IUseDebouncedFilter](hooks_data_useDebouncedFilter.md#iusedebouncedfilter)

### Functions

- [useDebouncedFilter](hooks_data_useDebouncedFilter.md#usedebouncedfilter)

## Type Aliases

### IUseDebouncedFilter

Ƭ **IUseDebouncedFilter**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `T`[] |
| `querySearch` | `string` |
| `searchHandler` | `DebouncedFunc`<(`text`: `string`) => `void`\> |

#### Defined in

[hooks/data/useDebouncedFilter.tsx:5](https://github.com/mts88/react-utils/blob/748ec10/lib/hooks/data/useDebouncedFilter.tsx#L5)

## Functions

### useDebouncedFilter

▸ **useDebouncedFilter**<`T`\>(`originalData`, `filterPredicate`, `debounceTime?`): [`IUseDebouncedFilter`](hooks_data_useDebouncedFilter.md#iusedebouncedfilter)<`T`\>

Filter a list using debounce system to avoid search floor.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `originalData` | `T`[] | `undefined` | Original list of data |
| `filterPredicate` | (`value`: `T`, `searchTerm`: `string`) => `boolean` | `undefined` | Predicate to use for filtering |
| `debounceTime` | `number` | `500` | - |

#### Returns

[`IUseDebouncedFilter`](hooks_data_useDebouncedFilter.md#iusedebouncedfilter)<`T`\>

filtered data and search handler to bind filter query changes

#### Defined in

[hooks/data/useDebouncedFilter.tsx:19](https://github.com/mts88/react-utils/blob/748ec10/lib/hooks/data/useDebouncedFilter.tsx#L19)
