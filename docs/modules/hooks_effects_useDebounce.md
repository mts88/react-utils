[@mts88/react-utils](../README.md) / [Exports](../modules.md) / hooks/effects/useDebounce

# Module: hooks/effects/useDebounce

## Table of contents

### Type Aliases

- [IUseDebounce](hooks_effects_useDebounce.md#iusedebounce)

### Functions

- [useDebounce](hooks_effects_useDebounce.md#usedebounce)

## Type Aliases

### IUseDebounce

Ƭ **IUseDebounce**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `querySearch` | `string` |
| `searchHandler` | `DebouncedFunc`<(`text`: `string`) => `void`\> |

#### Defined in

[hooks/effects/useDebounce.tsx:4](https://github.com/mts88/react-utils/blob/1802342/lib/hooks/effects/useDebounce.tsx#L4)

## Functions

### useDebounce

▸ **useDebounce**(`debounceTime?`): [`IUseDebounce`](hooks_effects_useDebounce.md#iusedebounce)

Prepare search param with debounce time

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `debounceTime` | `number` | `500` | Timing for debounce |

#### Returns

[`IUseDebounce`](hooks_effects_useDebounce.md#iusedebounce)

Search param and memoized function to handle search

#### Defined in

[hooks/effects/useDebounce.tsx:15](https://github.com/mts88/react-utils/blob/1802342/lib/hooks/effects/useDebounce.tsx#L15)
