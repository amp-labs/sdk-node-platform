# ModuleInfo

## Example Usage

```typescript
import { ModuleInfo } from "sdk-node-platform/models/operations";

let value: ModuleInfo = {
  displayName: "Troy29",
  baseURL: "https://afraid-folklore.com",
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `displayName`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `baseURL`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `support`                                                                          | [operations.ListProvidersSupport](../../models/operations/listproviderssupport.md) | :heavy_check_mark:                                                                 | The supported features for the provider.                                           |