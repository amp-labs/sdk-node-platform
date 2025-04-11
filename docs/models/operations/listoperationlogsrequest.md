# ListOperationLogsRequest

## Example Usage

```typescript
import { ListOperationLogsRequest } from "sdk-node-platform/models/operations";

let value: ListOperationLogsRequest = {
  projectIdOrName: "my-project",
  operationId: "<id>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `projectIdOrName`                         | *string*                                  | :heavy_check_mark:                        | The Ampersand project ID or project name. | my-project                                |
| `operationId`                             | *string*                                  | :heavy_check_mark:                        | Operation ID.                             |                                           |