# UpdateConnectionUpdateConnectionRequest

## Example Usage

```typescript
import { UpdateConnectionUpdateConnectionRequest } from "@amp-labs/sdk-node-platform/models/operations";

let value: UpdateConnectionUpdateConnectionRequest = {
  updateMask: [
    "<value>",
  ],
  connection: {
    groupRef: "group-123",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `updateMask`                                                                         | *string*[]                                                                           | :heavy_check_mark:                                                                   | The fields to update.                                                                |
| `connection`                                                                         | [operations.ConnectionRequestBody](../../models/operations/connectionrequestbody.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |