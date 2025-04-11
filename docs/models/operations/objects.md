# Objects

## Example Usage

```typescript
import { Objects } from "sdk-node-platform/models/operations";

let value: Objects = {
  objectName: "<value>",
  displayName: "Madaline_Kemmer",
  valueDefaults: {
    allowAnyFields: true,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `objectName`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `displayName`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `valueDefaults`                                                                                            | [operations.GetHydratedRevisionValueDefaults](../../models/operations/gethydratedrevisionvaluedefaults.md) | :heavy_minus_sign:                                                                                         | Configuration to set default write values for object fields.                                               |