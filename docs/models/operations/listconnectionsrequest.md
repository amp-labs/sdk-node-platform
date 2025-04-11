# ListConnectionsRequest

## Example Usage

```typescript
import { ListConnectionsRequest } from "sdk-node-platform/models/operations";

let value: ListConnectionsRequest = {
  projectIdOrName: "my-project",
  groupRef: "group-123",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `projectIdOrName`                                              | *string*                                                       | :heavy_check_mark:                                             | The Ampersand project ID or project name.                      | my-project                                                     |
| `provider`                                                     | *string*                                                       | :heavy_minus_sign:                                             | The provider name (e.g. "salesforce", "hubspot")               |                                                                |
| `groupRef`                                                     | *string*                                                       | :heavy_minus_sign:                                             | The ID of the user group that has access to this installation. | group-123                                                      |
| `consumerRef`                                                  | *string*                                                       | :heavy_minus_sign:                                             | The consumer reference.                                        |                                                                |