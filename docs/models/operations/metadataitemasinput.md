# MetadataItemAsInput

## Example Usage

```typescript
import { MetadataItemAsInput } from "@amp-labs/sdk-node-platform/models/operations";

let value: MetadataItemAsInput = {
  name: "<value>",
  docsURL: "https://example.com/how-to-find-subdomain",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | The internal identifier for the metadata field                                             |                                                                                            |
| `displayName`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | The human-readable name for the field                                                      |                                                                                            |
| `docsURL`                                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | URL with more information about how to locate this value                                   | https://example.com/how-to-find-subdomain                                                  |
| `moduleDependencies`                                                                       | Record<string, [operations.ModuleDependency](../../models/operations/moduledependency.md)> | :heavy_minus_sign:                                                                         | Module-specific dependencies for this metadata item.                                       |                                                                                            |