# ListOperationsRequest

## Example Usage

```typescript
import { ListOperationsRequest } from "@amp-labs/sdk-node-platform/models/operations";

let value: ListOperationsRequest = {
  projectIdOrName: "my-project",
  integrationId: "<id>",
  installationId: "<id>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `projectIdOrName`                                                             | *string*                                                                      | :heavy_check_mark:                                                            | The Ampersand project ID or project name.                                     | my-project                                                                    |
| `integrationId`                                                               | *string*                                                                      | :heavy_check_mark:                                                            | The integration ID.                                                           |                                                                               |
| `installationId`                                                              | *string*                                                                      | :heavy_check_mark:                                                            | The Ampersand installation ID.                                                |                                                                               |
| `pageSize`                                                                    | *number*                                                                      | :heavy_minus_sign:                                                            | The number of operations to return.                                           |                                                                               |
| `pageToken`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | A cursor that can be passed to paginate through multiple pages of operations. |                                                                               |