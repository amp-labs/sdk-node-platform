# GetConnectionProviderMetadataInfo

## Example Usage

```typescript
import { GetConnectionProviderMetadataInfo } from "@amp-labs/sdk-node-platform/models/operations";

let value: GetConnectionProviderMetadataInfo = {
  value: "1234567890",
  source: "input",
  displayName: "Account ID",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `value`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | The value of the metadata field                                                  | 1234567890                                                                       |
| `source`                                                                         | [operations.GetConnectionSource](../../models/operations/getconnectionsource.md) | :heavy_check_mark:                                                               | The source of the metadata field                                                 | input                                                                            |
| `displayName`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | The human-readable name for the field                                            | Account ID                                                                       |