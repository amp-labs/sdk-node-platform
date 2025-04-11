# GetProviderModuleInfo

## Example Usage

```typescript
import { GetProviderModuleInfo } from "@amp-labs/sdk-node-platform/models/operations";

let value: GetProviderModuleInfo = {
  displayName: "Tressie55",
  baseURL: "https://free-gloom.name/",
  support: {
    bulkWrite: {
      insert: false,
      update: false,
      upsert: false,
      delete: false,
    },
    proxy: false,
    read: false,
    subscribe: false,
    write: false,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `displayName`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `baseURL`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `support`                                                                                        | [operations.GetProviderProvidersSupport](../../models/operations/getproviderproviderssupport.md) | :heavy_check_mark:                                                                               | The supported features for the provider.                                                         |