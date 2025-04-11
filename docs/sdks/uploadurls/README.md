# UploadUrls
(*uploadUrls*)

## Overview

### Available Operations

* [generate](#generate) - Generate a signed URL to upload a zip file to.

## generate

Generate a signed URL to upload a zip file to.

### Example Usage

```typescript
import { SDKNodePlatform } from "sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.uploadUrls.generate();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKNodePlatformCore } from "sdk-node-platform/core.js";
import { uploadUrlsGenerate } from "sdk-node-platform/funcs/uploadUrlsGenerate.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await uploadUrlsGenerate(sdkNodePlatform);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenerateUploadUrlResponse](../../models/operations/generateuploadurlresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.GenerateUploadUrlInputValidationProblem | 422                                            | application/problem+json                       |
| errors.APIError                                | 4XX, 5XX                                       | \*/\*                                          |