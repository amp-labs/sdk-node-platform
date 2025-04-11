# BatchUpsertIntegrationsRequest

## Example Usage

```typescript
import { BatchUpsertIntegrationsRequest } from "@amp-labs/sdk-node-platform/models/operations";

let value: BatchUpsertIntegrationsRequest = {
  projectIdOrName: "my-project",
  requestBody: {
    sourceZipUrl:
      "https://storage.googleapis.com/my-bucket/source-files/integration-v1.2.3.zip",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                                              | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The Ampersand project ID or project name.                                                                      | my-project                                                                                                     |
| `requestBody`                                                                                                  | [operations.BatchUpsertIntegrationsRequestBody](../../models/operations/batchupsertintegrationsrequestbody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |