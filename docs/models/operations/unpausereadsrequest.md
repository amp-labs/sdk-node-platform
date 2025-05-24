# UnpauseReadsRequest

## Example Usage

```typescript
import { UnpauseReadsRequest } from "@amp-labs/sdk-node-platform/models/operations";

let value: UnpauseReadsRequest = {
  projectIdOrName: "my-project",
  integrationId: "<id>",
  installationId: "<id>",
  requestBody: {
    objects: [
      "[\"account\",\"contact\"]",
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                        | *string*                                                                                 | :heavy_check_mark:                                                                       | The Ampersand project ID or project name.                                                | my-project                                                                               |
| `integrationId`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | The integration ID.                                                                      |                                                                                          |
| `installationId`                                                                         | *string*                                                                                 | :heavy_check_mark:                                                                       | The Ampersand installation ID.                                                           |                                                                                          |
| `requestBody`                                                                            | [operations.UnpauseReadsRequestBody](../../models/operations/unpausereadsrequestbody.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |