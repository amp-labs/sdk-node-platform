# GenerateConnectionRequest

## Example Usage

```typescript
import { GenerateConnectionRequest } from "@amp-labs/sdk-node-platform/models/operations";

let value: GenerateConnectionRequest = {
  projectIdOrName: "my-project",
  requestBody: {
    providerMetadata: {
      "key": {
        value: "1234567890",
        source: "input",
        displayName: "Account ID",
      },
    },
    groupRef: "group-123",
    consumerRef: "<value>",
    provider: "<value>",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                                                                | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The Ampersand project ID or project name.                                                                                        | my-project                                                                                                                       |
| `requestBody`                                                                                                                    | [operations.GenerateConnectionGenerateConnectionRequest](../../models/operations/generateconnectiongenerateconnectionrequest.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |