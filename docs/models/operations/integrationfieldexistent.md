# IntegrationFieldExistent

## Example Usage

```typescript
import { IntegrationFieldExistent } from "@amp-labs/sdk-node-platform/models/operations";

let value: IntegrationFieldExistent = {
  fieldName: "<value>",
  mapToName: "account_id",
  mapToDisplayName: "Account ID",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 | Example                     |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `fieldName`                 | *string*                    | :heavy_check_mark:          | N/A                         |                             |
| `mapToName`                 | *string*                    | :heavy_minus_sign:          | The field name to map to.   | account_id                  |
| `mapToDisplayName`          | *string*                    | :heavy_minus_sign:          | The display name to map to. | Account ID                  |