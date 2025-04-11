# GetObjectMetadataForInstallationObjectMetadata

The retrieved object metadata

## Example Usage

```typescript
import { GetObjectMetadataForInstallationObjectMetadata } from "sdk-node-platform/models/operations";

let value: GetObjectMetadataForInstallationObjectMetadata = {
  name: "contact",
  displayName: "Contact",
  mappedObjectName: "people",
  fields: {
    "key": {
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
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | The provider name of the object                                                      | contact                                                                              |
| `displayName`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | Human-readable name of the object                                                    | Contact                                                                              |
| `mappedObjectName`                                                                   | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | people                                                                               |
| `fields`                                                                             | Record<string, [operations.FieldMetadata](../../models/operations/fieldmetadata.md)> | :heavy_check_mark:                                                                   | Map of field metadata keyed by field name                                            |                                                                                      |