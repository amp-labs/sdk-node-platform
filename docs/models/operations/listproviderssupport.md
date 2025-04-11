# ListProvidersSupport

The supported features for the provider.

## Example Usage

```typescript
import { ListProvidersSupport } from "sdk-node-platform/models/operations";

let value: ListProvidersSupport = {
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
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `bulkWrite`                                                                                          | [operations.ListProvidersBulkWriteSupport](../../models/operations/listprovidersbulkwritesupport.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `proxy`                                                                                              | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `read`                                                                                               | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `subscribe`                                                                                          | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `write`                                                                                              | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `subscribeSupport`                                                                                   | [operations.ListProvidersSubscribeSupport](../../models/operations/listproviderssubscribesupport.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |