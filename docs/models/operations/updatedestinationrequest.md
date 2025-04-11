# UpdateDestinationRequest

## Example Usage

```typescript
import { UpdateDestinationRequest } from "@amp-labs/sdk-node-platform/models/operations";

let value: UpdateDestinationRequest = {
  projectIdOrName: "my-project",
  destination: "<value>",
  requestBody: {
    updateMask: [
      "name",
      "metadata.url",
      "metadata.headers",
    ],
    destination: {
      name: "leadConvertedWebhook",
      metadata: {
        url: "https://webhooks.mailmonkey.com/salesforce-lead-converted",
        headers: {
          "Authorization": "Bearer 1234",
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
| `destination`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The destination ID.                                                                                |                                                                                                    |
| `requestBody`                                                                                      | [operations.UpdateDestinationRequestBody](../../models/operations/updatedestinationrequestbody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |