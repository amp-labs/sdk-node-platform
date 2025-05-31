# ListOperationsResponseBody

List of operations

## Example Usage

```typescript
import { ListOperationsResponseBody } from "@amp-labs/sdk-node-platform/models/operations";

let value: ListOperationsResponseBody = {
  results: [
    {
      projectId: "project-456",
      integrationId: "<id>",
      configId: "config-123",
      actionType: "read",
      id: "<id>",
      installationId: "<id>",
      status: "success",
      result: "[object] No changes",
      metadata: {},
      createTime: new Date("2023-07-13T21:34:44.816354Z"),
    },
  ],
  pagination: {
    done: false,
    nextPageToken: "Q9JT+2qfys28V4ODN+UayA==",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `results`                                                                            | [operations.Operation](../../models/operations/operation.md)[]                       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [operations.PaginationInformation](../../models/operations/paginationinformation.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |