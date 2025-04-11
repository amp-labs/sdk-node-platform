# Revisions
(*revisions*)

## Overview

### Available Operations

* [create](#create) - Create a new revision.
* [hydrate](#hydrate) - Hydrate a revision

## create

Create a new revision.

### Example Usage

```typescript
import { SDKNodePlatform } from "sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.revisions.create({
    projectIdOrName: "my-project",
    integrationId: "<id>",
    requestBody: {
      sourceZipUrl: "https://storage.googleapis.com/my-bucket/source-files/integration-v1.2.3.zip",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKNodePlatformCore } from "sdk-node-platform/core.js";
import { revisionsCreate } from "sdk-node-platform/funcs/revisionsCreate.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await revisionsCreate(sdkNodePlatform, {
    projectIdOrName: "my-project",
    integrationId: "<id>",
    requestBody: {
      sourceZipUrl: "https://storage.googleapis.com/my-bucket/source-files/integration-v1.2.3.zip",
    },
  });

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
| `request`                                                                                                                                                                      | [operations.CreateRevisionRequest](../../models/operations/createrevisionrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateRevisionAPIProblem](../../models/operations/createrevisionapiproblem.md)\>**

### Errors

| Error Type                                           | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.CreateRevisionInputValidationProblem          | 400                                                  | application/problem+json                             |
| errors.CreateRevisionRevisionsInputValidationProblem | 422                                                  | application/problem+json                             |
| errors.APIError                                      | 4XX, 5XX                                             | \*/\*                                                |

## hydrate

Hydrate a revision with information from the consumer's SaaS instance.

### Example Usage

```typescript
import { SDKNodePlatform } from "sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.revisions.hydrate({
    projectIdOrName: "my-project",
    integrationId: "<id>",
    revisionId: "<id>",
    connectionId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKNodePlatformCore } from "sdk-node-platform/core.js";
import { revisionsHydrate } from "sdk-node-platform/funcs/revisionsHydrate.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await revisionsHydrate(sdkNodePlatform, {
    projectIdOrName: "my-project",
    integrationId: "<id>",
    revisionId: "<id>",
    connectionId: "<id>",
  });

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
| `request`                                                                                                                                                                      | [operations.GetHydratedRevisionRequest](../../models/operations/gethydratedrevisionrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetHydratedRevisionResponse](../../models/operations/gethydratedrevisionresponse.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.GetHydratedRevisionInputValidationProblem          | 400                                                       | application/problem+json                                  |
| errors.GetHydratedRevisionRevisionsInputValidationProblem | 422                                                       | application/problem+json                                  |
| errors.APIError                                           | 4XX, 5XX                                                  | \*/\*                                                     |