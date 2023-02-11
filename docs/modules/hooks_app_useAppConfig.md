[react-utils](../README.md) / [Exports](../modules.md) / hooks/app/useAppConfig

# Module: hooks/app/useAppConfig

## Table of contents

### Functions

- [default](hooks_app_useAppConfig.md#default)

## Functions

### default

▸ **default**(): [`IAppConfig`](../interfaces/contexts_config_IAppConfig.IAppConfig.md)

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

[`IAppConfig`](../interfaces/contexts_config_IAppConfig.IAppConfig.md)

AppConfigContext

#### Defined in

[hooks/app/useAppConfig.tsx:22](https://github.com/mts88/react-utils/blob/bf85cb0/lib/hooks/app/useAppConfig.tsx#L22)
