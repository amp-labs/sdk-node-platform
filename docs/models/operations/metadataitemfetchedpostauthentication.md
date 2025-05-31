# MetadataItemFetchedPostAuthentication

## Example Usage

```typescript
import { MetadataItemFetchedPostAuthentication } from "@amp-labs/sdk-node-platform/models/operations";

let value: MetadataItemFetchedPostAuthentication = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The internal identifier for the metadata field                                                                       |
| `moduleDependencies`                                                                                                 | Record<string, [operations.ListProvidersModuleDependency](../../models/operations/listprovidersmoduledependency.md)> | :heavy_minus_sign:                                                                                                   | Module-specific dependencies for this metadata item.                                                                 |