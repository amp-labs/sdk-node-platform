# CreateDestinationDestination

Created

## Example Usage

```typescript
import { CreateDestinationDestination } from "sdk-node-platform/models/operations";

let value: CreateDestinationDestination = {
  id: "<id>",
  name: "leadConvertedWebhook",
  type: "webhook",
  metadata: {
    url: "https://webhooks.mailmonkey.com/salesforce-lead-converted",
    headers: {
      "Authorization": "Bearer 1234",
    },
  },
  createTime: new Date("2024-07-04T14:51:08.243Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The destination ID.                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | User-defined name for the destination                                                         | leadConvertedWebhook                                                                          |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The type of the destination                                                                   | webhook                                                                                       |
| `metadata`                                                                                    | [operations.CreateDestinationMetadata](../../models/operations/createdestinationmetadata.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the destination was created.                                                         |                                                                                               |
| `updateTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the destination was updated.                                                         |                                                                                               |