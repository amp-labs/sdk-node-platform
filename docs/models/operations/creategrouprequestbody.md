# CreateGroupRequestBody

## Example Usage

```typescript
import { CreateGroupRequestBody } from "sdk-node-platform/models/operations";

let value: CreateGroupRequestBody = {
  groupRef: "group-123",
  groupName: "Super Customers",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `groupRef`                                                       | *string*                                                         | :heavy_check_mark:                                               | The ID of the user group that has access to this installation.   | group-123                                                        |
| `groupName`                                                      | *string*                                                         | :heavy_check_mark:                                               | The name of the user group that has access to this installation. | Super Customers                                                  |