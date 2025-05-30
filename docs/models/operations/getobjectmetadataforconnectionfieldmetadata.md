# GetObjectMetadataForConnectionFieldMetadata

## Example Usage

```typescript
import { GetObjectMetadataForConnectionFieldMetadata } from "@amp-labs/sdk-node-platform/models/operations";

let value: GetObjectMetadataForConnectionFieldMetadata = {
  fieldName: "Account ID",
  displayName: "Account ID",
  providerType: "timestamp",
  readOnly: false,
  values: [
    {
      value: "outbound",
      displayValue: "Outbound Campaign",
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `fieldName`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The name of the field from the provider API.                                                                                 | Account ID                                                                                                                   |
| `displayName`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The display name of the field from the provider API.                                                                         | Account ID                                                                                                                   |
| `valueType`                                                                                                                  | [operations.GetObjectMetadataForConnectionValueType](../../models/operations/getobjectmetadataforconnectionvaluetype.md)     | :heavy_minus_sign:                                                                                                           | A normalized field type                                                                                                      |                                                                                                                              |
| `providerType`                                                                                                               | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Raw field type from the provider API.                                                                                        | timestamp                                                                                                                    |
| `readOnly`                                                                                                                   | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | Whether the field is read-only.                                                                                              | false                                                                                                                        |
| `values`                                                                                                                     | [operations.GetObjectMetadataForConnectionFieldValue](../../models/operations/getobjectmetadataforconnectionfieldvalue.md)[] | :heavy_minus_sign:                                                                                                           | If the valueType is singleSelect or multiSelect, this is a list of possible values                                           |                                                                                                                              |