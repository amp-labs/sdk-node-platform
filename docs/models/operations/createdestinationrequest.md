# CreateDestinationRequest

## Example Usage

```typescript
import { CreateDestinationRequest } from "sdk-node-platform/models/operations";

let value: CreateDestinationRequest = {
  projectIdOrName: "my-project",
  requestBody: {
    name: "leadConvertedWebhook",
    type: "webhook",
    metadata: {
      url: "https://webhooks.mailmonkey.com/salesforce-lead-converted",
      headers: {
        "Authorization": "Bearer 1234",
      },
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                                  | *string*                                                                                           | :heavy_check_mark:                                                                                 | The Ampersand project ID or project name.                                                          | my-project                                                                                         |
| `requestBody`                                                                                      | [operations.CreateDestinationRequestBody](../../models/operations/createdestinationrequestbody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |