# CreateInstallationRequest

## Example Usage

```typescript
import { CreateInstallationRequest } from "sdk-node-platform/models/operations";

let value: CreateInstallationRequest = {
  projectIdOrName: "my-project",
  integrationId: "<id>",
  requestBody: {
    groupRef: "group-123",
    config: {
      content: {
        provider: "salesforce",
      },
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                                    | *string*                                                                                             | :heavy_check_mark:                                                                                   | The Ampersand project ID or project name.                                                            | my-project                                                                                           |
| `integrationId`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | The integration ID.                                                                                  |                                                                                                      |
| `requestBody`                                                                                        | [operations.CreateInstallationRequestBody](../../models/operations/createinstallationrequestbody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |