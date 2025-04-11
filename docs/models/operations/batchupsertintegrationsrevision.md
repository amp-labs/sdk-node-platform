# BatchUpsertIntegrationsRevision

## Example Usage

```typescript
import { BatchUpsertIntegrationsRevision } from "sdk-node-platform/models/operations";

let value: BatchUpsertIntegrationsRevision = {
  id: "revision-id-1",
  specVersion: "1.0.0",
  createTime: new Date("2025-12-19T06:11:07.571Z"),
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
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                   | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The revision ID.                                                                                                                       | revision-id-1                                                                                                                          |
| `specVersion`                                                                                                                          | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The spec version string.                                                                                                               | 1.0.0                                                                                                                                  |
| `createTime`                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                          | :heavy_check_mark:                                                                                                                     | The time the revision was created.                                                                                                     |                                                                                                                                        |
| `content`                                                                                                                              | [operations.BatchUpsertIntegrationsIntegrationsIntegration](../../models/operations/batchupsertintegrationsintegrationsintegration.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |