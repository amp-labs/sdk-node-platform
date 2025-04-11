# GetProviderProvidersSupport

The supported features for the provider.

## Example Usage

```typescript
import { GetProviderProvidersSupport } from "@amp-labs/sdk-node-platform/models/operations";

let value: GetProviderProvidersSupport = {
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

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `bulkWrite`                                                                                                        | [operations.GetProviderProvidersBulkWriteSupport](../../models/operations/getproviderprovidersbulkwritesupport.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `proxy`                                                                                                            | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `read`                                                                                                             | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `subscribe`                                                                                                        | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `write`                                                                                                            | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `subscribeSupport`                                                                                                 | [operations.GetProviderProvidersSubscribeSupport](../../models/operations/getproviderproviderssubscribesupport.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |