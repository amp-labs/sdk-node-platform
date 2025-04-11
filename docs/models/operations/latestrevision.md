# LatestRevision

## Example Usage

```typescript
import { LatestRevision } from "@amp-labs/sdk-node-platform/models/operations";

let value: LatestRevision = {
  specVersion: "1.0.0",
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

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `specVersion`                                                    | *string*                                                         | :heavy_check_mark:                                               | The spec version string.                                         | 1.0.0                                                            |
| `content`                                                        | [operations.Integration](../../models/operations/integration.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |