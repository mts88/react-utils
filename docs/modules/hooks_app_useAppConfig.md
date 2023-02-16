[@mts88/react-utils](../README.md) / [Exports](../modules.md) / hooks/app/useAppConfig

# Module: hooks/app/useAppConfig

## Table of contents

### Functions

- [useAppConfig](hooks_app_useAppConfig.md#useappconfig)

## Functions

### useAppConfig

▸ **useAppConfig**(): [`IAppConfig`](contexts_config_IAppConfig.md#iappconfig)

Hook to use AppConfigContext

**`Example`**

```
 const MyComponent = () => {

     const config = useAppConfig()

      return (
         <>{config.myField}</>
      )
 }

```

#### Returns

[`IAppConfig`](contexts_config_IAppConfig.md#iappconfig)

AppConfigContext

#### Defined in

[hooks/app/useAppConfig.tsx:22](https://github.com/mts88/react-utils/blob/1802342/lib/hooks/app/useAppConfig.tsx#L22)
