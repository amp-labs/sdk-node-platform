# CreateRevisionRequest

## Example Usage

```typescript
import { CreateRevisionRequest } from "@amp-labs/sdk-node-platform/models/operations";

let value: CreateRevisionRequest = {
  projectIdOrName: "my-project",
  integrationId: "<id>",
  requestBody: {
    sourceZipUrl:
      "https://storage.googleapis.com/my-bucket/source-files/integration-v1.2.3.zip",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                            | *string*                                                                                     | :heavy_check_mark:                                                                           | The Ampersand project ID or project name.                                                    | my-project                                                                                   |
| `integrationId`                                                                              | *string*                                                                                     | :heavy_check_mark:                                                                           | The integration ID.                                                                          |                                                                                              |
| `requestBody`                                                                                | [operations.CreateRevisionRequestBody](../../models/operations/createrevisionrequestbody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |