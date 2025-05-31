# GetProviderMetadataItemFetchedPostAuthentication

## Example Usage

```typescript
import { GetProviderMetadataItemFetchedPostAuthentication } from "@amp-labs/sdk-node-platform/models/operations";

let value: GetProviderMetadataItemFetchedPostAuthentication = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                             | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The internal identifier for the metadata field                                                                                     |
| `moduleDependencies`                                                                                                               | Record<string, [operations.GetProviderProvidersModuleDependency](../../models/operations/getproviderprovidersmoduledependency.md)> | :heavy_minus_sign:                                                                                                                 | Module-specific dependencies for this metadata item.                                                                               |