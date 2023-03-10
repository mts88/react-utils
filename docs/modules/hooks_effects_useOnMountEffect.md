[@mts88/react-utils](../README.md) / [Exports](../modules.md) / hooks/effects/useOnMountEffect

# Module: hooks/effects/useOnMountEffect

## Table of contents

### Functions

- [useOnMountEffect](hooks_effects_useOnMountEffect.md#useonmounteffect)

## Functions

### useOnMountEffect

▸ **useOnMountEffect**<`T`\>(`onMountFunc`, `onUnmountFunc?`, `deps?`): `void`

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

[hooks/effects/useOnMountEffect.tsx:32](https://github.com/mts88/react-utils/blob/efeb83f/lib/hooks/effects/useOnMountEffect.tsx#L32)
