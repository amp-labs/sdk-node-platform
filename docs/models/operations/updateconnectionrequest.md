# UpdateConnectionRequest

## Example Usage

```typescript
import { UpdateConnectionRequest } from "@amp-labs/sdk-node-platform/models/operations";

let value: UpdateConnectionRequest = {
  projectIdOrName: "<value>",
  connectionId: "<id>",
  requestBody: {
    updateMask: [
      "<value>",
    ],
    connection: {
      providerMetadata: {
        "key": {
          value: "1234567890",
          source: "input",
          displayName: "Account ID",
        },
      },
      groupRef: "group-123",
    },
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `projectIdOrName`                                                                                                        | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Project ID or Name.                                                                                                      |
| `connectionId`                                                                                                           | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Connection ID.                                                                                                           |
| `requestBody`                                                                                                            | [operations.UpdateConnectionUpdateConnectionRequest](../../models/operations/updateconnectionupdateconnectionrequest.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |