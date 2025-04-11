# Revision

## Example Usage

```typescript
import { Revision } from "@amp-labs/sdk-node-platform/models/operations";

let value: Revision = {
  id: "revision-id-1",
  specVersion: "1.0.0",
  createTime: new Date("2025-01-14T03:58:52.058Z"),
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
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The revision ID.                                                                                                         | revision-id-1                                                                                                            |
| `specVersion`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The spec version string.                                                                                                 | 1.0.0                                                                                                                    |
| `createTime`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                            | :heavy_check_mark:                                                                                                       | The time the revision was created.                                                                                       |                                                                                                                          |
| `content`                                                                                                                | [operations.ListIntegrationsIntegrationsIntegration](../../models/operations/listintegrationsintegrationsintegration.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |