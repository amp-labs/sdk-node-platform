# BatchUpsertIntegrationsRequestBody

The source of the integrations to upsert. One of sourceZipUrl or sourceYaml is required.

## Example Usage

```typescript
import { BatchUpsertIntegrationsRequestBody } from "sdk-node-platform/models/operations";

let value: BatchUpsertIntegrationsRequestBody = {
  sourceZipUrl:
    "https://storage.googleapis.com/my-bucket/source-files/integration-v1.2.3.zip",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `sourceZipUrl`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | URL of where a zip of the source files can be downloaded (e.g. Google Cloud Storage URL). | https://storage.googleapis.com/my-bucket/source-files/integration-v1.2.3.zip              |
| `sourceYaml`                                                                              | *string*                                                                                  | :heavy_minus_sign:                                                                        | A YAML string that defines the integrations.                                              |                                                                                           |