# BatchUpsertIntegrationsIntegrationsIntegration

## Example Usage

```typescript
import { BatchUpsertIntegrationsIntegrationsIntegration } from "sdk-node-platform/models/operations";

let value: BatchUpsertIntegrationsIntegrationsIntegration = {
  name: "<value>",
  provider: "<value>",
  read: {
    objects: [
      {
        objectName: "<value>",
        destination: "<value>",
        schedule: "<value>",
        mapToName: "people",
        mapToDisplayName: "People",
        requiredFields: [
          {
            mapToName: "<value>",
          },
        ],
        optionalFields: [
          {
            fieldName: "<value>",
            mapToName: "account_id",
            mapToDisplayName: "Account ID",
          },
        ],
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
        inheritMapping: true,
        valueDefaults: {
          allowAnyFields: true,
        },
      },
    ],
  },
  subscribe: {
    objects: [
      {
        objectName: "<value>",
        destination: "<value>",
        inheritFieldsAndMapping: true,
        updateEvent: {
          watchFieldsAuto: "all",
          requiredWatchFields: [
            "[\"name\",\"domain\"]",
          ],
        },
        otherEvents: [
          "[\"object.merged\",\"object.restored\"]",
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `displayName`                                                                                                                    | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `provider`                                                                                                                       | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `read`                                                                                                                           | [operations.BatchUpsertIntegrationsReadIntegration](../../models/operations/batchupsertintegrationsreadintegration.md)           | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `write`                                                                                                                          | [operations.BatchUpsertIntegrationsWriteIntegration](../../models/operations/batchupsertintegrationswriteintegration.md)         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `proxy`                                                                                                                          | [operations.BatchUpsertIntegrationsProxyIntegration](../../models/operations/batchupsertintegrationsproxyintegration.md)         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `subscribe`                                                                                                                      | [operations.BatchUpsertIntegrationsSubscribeIntegration](../../models/operations/batchupsertintegrationssubscribeintegration.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |