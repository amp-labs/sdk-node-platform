# CreateIntegrationRequestBody

## Example Usage

```typescript
import { CreateIntegrationRequestBody } from "sdk-node-platform/models/operations";

let value: CreateIntegrationRequestBody = {
  name: "my-integration",
  provider: "<value>",
  latestRevision: {
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
                mapToName: "<value>",
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

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The integration name.                                                  | my-integration                                                         |
| `provider`                                                             | *string*                                                               | :heavy_check_mark:                                                     | The provider name (e.g. "salesforce", "hubspot")                       |                                                                        |
| `latestRevision`                                                       | [operations.LatestRevision](../../models/operations/latestrevision.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |