[react-utils](../README.md) / [Exports](../modules.md) / hooks/effects/useOnMountEffect

# Module: hooks/effects/useOnMountEffect

## Table of contents

### Functions

- [default](hooks_effects_useOnMountEffect.md#default)

## Functions

### default

▸ **default**<`T`\>(`onMountFunc`, `onUnmountFunc?`, `deps?`): `void`

Execute onMountFunc when component is mounted. Avoid double execution of React 18+' useEffect.

**`Example`**

```
 const MyComponent = () => {

     const [ counter, setCounter ] = useState(0)

      useOnMountEffect(
         // on mount
         () => {
             setCounter(1)
         },
         // on unmount
         () => {
             setCounter(0)
         }
      )
 }

```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `onMountFunc` | `Function` | `undefined` | Function to execute onMount of component. |
| `onUnmountFunc` | `Function` | `undefined` | *Optional* - Function executed onUnMount of component. |
| `deps` | `T`[] | `[]` | *Optional* - Effect dependencies |

#### Returns

`void`

#### Defined in

[hooks/effects/useOnMountEffect.tsx:32](https://github.com/mts88/react-utils/blob/bf85cb0/lib/hooks/effects/useOnMountEffect.tsx#L32)
