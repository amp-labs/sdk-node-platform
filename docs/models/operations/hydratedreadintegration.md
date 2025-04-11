# HydratedReadIntegration

## Example Usage

```typescript
import { HydratedReadIntegration } from "sdk-node-platform/models/operations";

let value: HydratedReadIntegration = {
  objects: [
    {
      error: "Failed to fetch fields from provider",
      objectName: "<value>",
      displayName: "Verlie_Kassulke1",
      mapToName: "people",
      mapToDisplayName: "People",
      destination: "<value>",
      schedule: "<value>",
      requiredFields: [
        {
          mapToName: "<value>",
        },
      ],
      optionalFields: [
        {
          fieldName: "<value>",
          displayName: "Liana.Collins",
          mapToName: "account_id",
          mapToDisplayName: "Account ID",
        },
      ],
      allFields: [
        {
          mapToName: "<value>",
        },
      ],
      allFieldsMetadata: {
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
      backfill: {
        defaultPeriod: {
          days: 30,
          fullHistory: false,
        },
      },
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `objects`                                                                                      | [operations.HydratedIntegrationObject](../../models/operations/hydratedintegrationobject.md)[] | :heavy_minus_sign:                                                                             | N/A                                                                                            |