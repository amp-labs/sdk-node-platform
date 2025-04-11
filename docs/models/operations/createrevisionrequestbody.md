# CreateRevisionRequestBody

The source of the revision to create. One of sourceZipUrl or sourceYaml is required.

## Example Usage

```typescript
import { CreateRevisionRequestBody } from "@amp-labs/sdk-node-platform/models/operations";

let value: CreateRevisionRequestBody = {
  sourceZipUrl:
    "https://storage.googleapis.com/my-bucket/source-files/integration-v1.2.3.zip",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               | Example                                                                                   |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `sourceZipUrl`                                                                            | *string*                                                                                  | :heavy_minus_sign:                                                                        | URL of where a zip of the source files can be downloaded (e.g. Google Cloud Storage URL). | https://storage.googleapis.com/my-bucket/source-files/integration-v1.2.3.zip              |
| `sourceYaml`                                                                              | *string*                                                                                  | :heavy_minus_sign:                                                                        | The source YAML file that defines the revision.                                           |                                                                                           |