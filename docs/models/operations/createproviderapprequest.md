# CreateProviderAppRequest

## Example Usage

```typescript
import { CreateProviderAppRequest } from "@amp-labs/sdk-node-platform/models/operations";

let value: CreateProviderAppRequest = {
  projectIdOrName: "my-project",
  requestBody: {
    externalRef: "external-id-123",
    provider: "salesforce",
    clientId: "client-id-123",
    clientSecret: "client-secret-123",
    scopes: [
      "[\"read\",\"write\"]",
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                                  | *string*                                                                                           | :heavy_check_mark:                                                                                 | The Ampersand project ID or project name.                                                          | my-project                                                                                         |
| `requestBody`                                                                                      | [operations.CreateProviderAppRequestBody](../../models/operations/createproviderapprequestbody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |