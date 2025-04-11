# CreateGroupRequest

## Example Usage

```typescript
import { CreateGroupRequest } from "@amp-labs/sdk-node-platform/models/operations";

let value: CreateGroupRequest = {
  projectIdOrName: "my-project",
  requestBody: {
    groupRef: "group-123",
    groupName: "Super Customers",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                      | *string*                                                                               | :heavy_check_mark:                                                                     | The Ampersand project ID or project name.                                              | my-project                                                                             |
| `requestBody`                                                                          | [operations.CreateGroupRequestBody](../../models/operations/creategrouprequestbody.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |