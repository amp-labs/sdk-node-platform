# HydratedIntegrationField1

## Example Usage

```typescript
import { HydratedIntegrationField1 } from "sdk-node-platform/models/operations";

let value: HydratedIntegrationField1 = {
  fieldName: "<value>",
  displayName: "Easter.Gulgowski",
  mapToName: "account_id",
  mapToDisplayName: "Account ID",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `fieldName`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |                                                |
| `displayName`                                  | *string*                                       | :heavy_check_mark:                             | N/A                                            |                                                |
| `mapToName`                                    | *string*                                       | :heavy_minus_sign:                             | The field name to map to in the destination.   | account_id                                     |
| `mapToDisplayName`                             | *string*                                       | :heavy_minus_sign:                             | The display name to map to in the destination. | Account ID                                     |