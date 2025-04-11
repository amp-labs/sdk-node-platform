# BatchUpsertIntegrationsIntegration

## Example Usage

```typescript
import { BatchUpsertIntegrationsIntegration } from "sdk-node-platform/models/operations";

let value: BatchUpsertIntegrationsIntegration = {
  id: "<id>",
  projectId: "project-456",
  name: "read-accounts",
  provider: "salesforce",
  createTime: new Date("2023-06-26T19:05:08.010Z"),
  latestRevision: {
    id: "revision-id-1",
    specVersion: "1.0.0",
    createTime: new Date("2024-12-16T19:21:41.015Z"),
    content: {
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
                fieldName: "<value>",
                mapToName: "account_id",
                mapToDisplayName: "Account ID",
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
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The integration ID.                                                                                      |                                                                                                          |
| `projectId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The Ampersand project ID.                                                                                | project-456                                                                                              |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The integration name.                                                                                    | read-accounts                                                                                            |
| `provider`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The SaaS provider that this integration connects to.                                                     | salesforce                                                                                               |
| `createTime`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_check_mark:                                                                                       | The time the integration was created.                                                                    |                                                                                                          |
| `updateTime`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)            | :heavy_minus_sign:                                                                                       | The time the integration was last updated.                                                               |                                                                                                          |
| `latestRevision`                                                                                         | [operations.BatchUpsertIntegrationsRevision](../../models/operations/batchupsertintegrationsrevision.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |