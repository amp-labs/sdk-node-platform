# HydratedIntegration

## Example Usage

```typescript
import { HydratedIntegration } from "sdk-node-platform/models/operations";

let value: HydratedIntegration = {
  name: "<value>",
  provider: "<value>",
  read: {
    objects: [
      {
        error: "Failed to fetch fields from provider",
        objectName: "<value>",
        displayName: "Zoila.Stroman61",
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
            mapToName: "<value>",
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
  },
  write: {
    objects: [
      {
        objectName: "<value>",
        displayName: "Gwendolyn72",
        valueDefaults: {
          allowAnyFields: true,
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `displayName`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `provider`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `read`                                                                                     | [operations.HydratedReadIntegration](../../models/operations/hydratedreadintegration.md)   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `write`                                                                                    | [operations.Write](../../models/operations/write.md)                                       | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `proxy`                                                                                    | [operations.HydratedProxyIntegration](../../models/operations/hydratedproxyintegration.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |