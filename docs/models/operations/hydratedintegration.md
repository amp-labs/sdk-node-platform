# HydratedIntegration

## Example Usage

```typescript
import { HydratedIntegration } from "@amp-labs/sdk-node-platform/models/operations";

let value: HydratedIntegration = {
  name: "<value>",
  provider: "<value>",
  read: {
    objects: [
      {
        error: "Failed to fetch fields from provider",
        objectName: "<value>",
        displayName: "Dorian_Donnelly37",
        mapToName: "people",
        mapToDisplayName: "People",
        destination: "<value>",
        schedule: "<value>",
        requiredFields: [
          {
            fieldName: "<value>",
            displayName: "Darby.Hessel",
            mapToName: "account_id",
            mapToDisplayName: "Account ID",
          },
        ],
        optionalFields: [
          {
            fieldName: "<value>",
            displayName: "Jolie.Lang20",
            mapToName: "account_id",
            mapToDisplayName: "Account ID",
          },
        ],
        allFields: [
          {
            fieldName: "<value>",
            displayName: "Carissa_Hudson6",
            mapToName: "account_id",
            mapToDisplayName: "Account ID",
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
        displayName: "Jimmy.Crona72",
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