[react-utils](../README.md) / [Exports](../modules.md) / dom/useDocumentTitle

# Module: dom/useDocumentTitle

## Table of contents

### Functions

- [default](dom_useDocumentTitle.md#default)

## Functions

### default

▸ **default**(`title?`): `IUseDocumentTitle`

Set DOM title, and return methods to update it.

**`Example`**

```
 const MyComponent = () => {

     const { updateDocumentTitle } = useDocumentTitle('Initial title')
     // .... other params

     useEffect(() => {
         updateDocumentTitle('Update my title')
         return () => {
             updateDocumentTitle('Initial title')
         }
     }, [...deps])
 }

```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title?` | `string` | *Optional* - Title to apply |

#### Returns

`IUseDocumentTitle`

Methods to update title. See IUseDocumentTitle.

#### Defined in

[dom/useDocumentTitle.tsx:32](https://github.com/mts88/react-utils/blob/6e3debd/lib/hooks/dom/useDocumentTitle.tsx#L32)
