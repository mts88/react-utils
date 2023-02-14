[@mts88/react-utils](../README.md) / [Exports](../modules.md) / contexts/config/AppConfigContext

# Module: contexts/config/AppConfigContext

## Table of contents

### Variables

- [AppConfigContext](contexts_config_AppConfigContext.md#appconfigcontext)

### Functions

- [AppConfigProvider](contexts_config_AppConfigContext.md#appconfigprovider)

## Variables

### AppConfigContext

• `Const` **AppConfigContext**: `Context`<[`IAppConfig`](contexts_config_IAppConfig.md#iappconfig)\>

Create initial context

#### Defined in

[contexts/config/AppConfigContext.tsx:8](https://github.com/mts88/react-utils/blob/748ec10/lib/contexts/config/AppConfigContext.tsx#L8)

## Functions

### AppConfigProvider

▸ **AppConfigProvider**(`«destructured»`): `JSX.Element`

Create Provider for App Config Context

**`Example`**

Without custom configuration
```

 const MyComponent = () => {

      return (
         <AppConfigProvider>
           <MyOtherAppPart />
         </AppConfigProvider>
      )
 }
```

**`Example`**

With custom configuration
```
 interface MyAppConfig extends IAppConfig;

 const MyComponent = () => {

     const config: Partial<MyAppConfig> = {
         appName: 'My App Name'
      }

      return (
         <AppConfigProvider configuration={config}>
           <MyOtherAppPart />
         </AppConfigProvider>
      )
 }
```

.... in other component

```
 const MyOtherComponent = () => {

     const config = useAppConfig()

      return (
         <>{config.appName}</>
      )
 }

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `children` | `ReactNode` |
| › `configuration?` | `Partial`<[`IAppConfig`](contexts_config_IAppConfig.md#iappconfig)\> |

#### Returns

`JSX.Element`

#### Defined in

[contexts/config/AppConfigContext.tsx:58](https://github.com/mts88/react-utils/blob/748ec10/lib/contexts/config/AppConfigContext.tsx#L58)
