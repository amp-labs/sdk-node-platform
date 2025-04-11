# UpdateProviderAppRequest

## Example Usage

```typescript
import { UpdateProviderAppRequest } from "@amp-labs/sdk-node-platform/models/operations";

let value: UpdateProviderAppRequest = {
  projectIdOrName: "my-project",
  providerAppId: "32356abe-d2fd-49c7-9030-abdcbc6456d4",
  requestBody: {
    updateMask: [
      "externalRef",
      "provider",
      "clientId",
      "clientSecret",
    ],
    providerApp: {
      externalRef: "external-id-123",
      provider: "salesforce",
      clientId: "client-id-123",
      clientSecret: "client-secret-123",
      scopes: [
        "[\"read\",\"write\"]",
      ],
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                                  | *string*                                                                                           | :heavy_check_mark:                                                                                 | The Ampersand project ID or project name.                                                          | my-project                                                                                         |
| `providerAppId`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | ID of the provider app, returned by the CreateProviderApp call.                                    | 32356abe-d2fd-49c7-9030-abdcbc6456d4                                                               |
| `requestBody`                                                                                      | [operations.UpdateProviderAppRequestBody](../../models/operations/updateproviderapprequestbody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |