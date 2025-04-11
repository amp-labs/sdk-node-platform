# GenerateConnectionRequest

## Example Usage

```typescript
import { GenerateConnectionRequest } from "sdk-node-platform/models/operations";

let value: GenerateConnectionRequest = {
  projectIdOrName: "my-project",
  requestBody: {
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