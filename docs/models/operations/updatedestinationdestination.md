# UpdateDestinationDestination

Updated

## Example Usage

```typescript
import { UpdateDestinationDestination } from "@amp-labs/sdk-node-platform/models/operations";

let value: UpdateDestinationDestination = {
  id: "<id>",
  name: "leadConvertedWebhook",
  type: "webhook",
  metadata: {
    url: "https://webhooks.mailmonkey.com/salesforce-lead-converted",
    headers: {
      "Authorization": "Bearer 1234",
    },
  },
  createTime: new Date("2023-10-29T09:52:46.073Z"),
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The destination ID.                                                                                                  |                                                                                                                      |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | User-defined name for the destination                                                                                | leadConvertedWebhook                                                                                                 |
| `type`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The type of the destination                                                                                          | webhook                                                                                                              |
| `metadata`                                                                                                           | [operations.UpdateDestinationDestinationsMetadata](../../models/operations/updatedestinationdestinationsmetadata.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `createTime`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | The time the destination was created.                                                                                |                                                                                                                      |
| `updateTime`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_minus_sign:                                                                                                   | The time the destination was updated.                                                                                |                                                                                                                      |