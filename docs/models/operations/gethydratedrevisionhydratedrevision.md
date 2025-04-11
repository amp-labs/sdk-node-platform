# GetHydratedRevisionHydratedRevision

Hydrated revision

## Example Usage

```typescript
import { GetHydratedRevisionHydratedRevision } from "sdk-node-platform/models/operations";

let value: GetHydratedRevisionHydratedRevision = {
  id: "revision-id-1",
  specVersion: "1.0.0",
  createTime: new Date("2025-12-05T04:07:03.604Z"),
  content: {
    name: "<value>",
    provider: "<value>",
    read: {
      objects: [
        {
          error: "Failed to fetch fields from provider",
          objectName: "<value>",
          displayName: "Russ_Hessel",
          mapToName: "people",
          mapToDisplayName: "People",
          destination: "<value>",
          schedule: "<value>",
          requiredFields: [
            {
              fieldName: "<value>",
              displayName: "Cody34",
              mapToName: "account_id",
              mapToDisplayName: "Account ID",
            },
          ],
          optionalFields: [
            {
              mapToName: "<value>",
            },
          ],
          allFields: [
            {
              fieldName: "<value>",
              displayName: "Casimer.Mayert",
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
          displayName: "Kailee.Renner39",
          valueDefaults: {
            allowAnyFields: true,
          },
        },
      ],
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The revision ID.                                                                              | revision-id-1                                                                                 |
| `specVersion`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The spec version string.                                                                      | 1.0.0                                                                                         |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the revision was created.                                                            |                                                                                               |
| `content`                                                                                     | [operations.HydratedIntegration](../../models/operations/hydratedintegration.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |