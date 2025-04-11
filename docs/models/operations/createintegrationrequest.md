# CreateIntegrationRequest

## Example Usage

```typescript
import { CreateIntegrationRequest } from "sdk-node-platform/models/operations";

let value: CreateIntegrationRequest = {
  projectIdOrName: "my-project",
  requestBody: {
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
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                                  | *string*                                                                                           | :heavy_check_mark:                                                                                 | The Ampersand project ID or project name.                                                          | my-project                                                                                         |
| `requestBody`                                                                                      | [operations.CreateIntegrationRequestBody](../../models/operations/createintegrationrequestbody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |