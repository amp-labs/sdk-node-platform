# GetOperationRequest

## Example Usage

```typescript
import { GetOperationRequest } from "@amp-labs/sdk-node-platform/models/operations";

let value: GetOperationRequest = {
  projectIdOrName: "my-project",
  operationId: "<id>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `projectIdOrName`                         | *string*                                  | :heavy_check_mark:                        | The Ampersand project ID or project name. | my-project                                |
| `operationId`                             | *string*                                  | :heavy_check_mark:                        | Operation ID.                             |                                           |