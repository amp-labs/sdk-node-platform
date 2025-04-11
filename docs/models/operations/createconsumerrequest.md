# CreateConsumerRequest

## Example Usage

```typescript
import { CreateConsumerRequest } from "sdk-node-platform/models/operations";

let value: CreateConsumerRequest = {
  projectIdOrName: "my-project",
  requestBody: {
    consumerRef: "consumer-123",
    consumerName: "John doe",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                            | *string*                                                                                     | :heavy_check_mark:                                                                           | The Ampersand project ID or project name.                                                    | my-project                                                                                   |
| `requestBody`                                                                                | [operations.CreateConsumerRequestBody](../../models/operations/createconsumerrequestbody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |