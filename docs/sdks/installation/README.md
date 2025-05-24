# Installation
(*installation*)

## Overview

### Available Operations

* [pauseReads](#pausereads) - Pause reads for an installation
* [unpauseReads](#unpausereads) - Unpause reads for an installation

## pauseReads

Pauses all reads for an installation. If reads are already paused, this will be a no-op. Accepts specific objects to pause reads for in the request body.

### Example Usage

```typescript
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.installation.pauseReads({
    projectIdOrName: "my-project",
    integrationId: "<id>",
    installationId: "<id>",
    requestBody: {
      objects: [
        "[\"account\",\"contact\"]",
      ],
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
import { SDKNodePlatformCore } from "@amp-labs/sdk-node-platform/core.js";
import { installationPauseReads } from "@amp-labs/sdk-node-platform/funcs/installationPauseReads.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await installationPauseReads(sdkNodePlatform, {
    projectIdOrName: "my-project",
    integrationId: "<id>",
    installationId: "<id>",
    requestBody: {
      objects: [
        "[\"account\",\"contact\"]",
      ],
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
| `request`                                                                                                                                                                      | [operations.PauseReadsRequest](../../models/operations/pausereadsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PauseReadsAPIProblem](../../models/operations/pausereadsapiproblem.md)\>**

### Errors

| Error Type                              | Status Code                             | Content Type                            |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| errors.PauseReadsInputValidationProblem | 400                                     | application/problem+json                |
| errors.APIError                         | 4XX, 5XX                                | \*/\*                                   |

## unpauseReads

Unpauses all reads for an installation. If no reads were paused, this will be a no-op. Accepts specific objects to unpause reads for in the request body.

### Example Usage

```typescript
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.installation.unpauseReads({
    projectIdOrName: "my-project",
    integrationId: "<id>",
    installationId: "<id>",
    requestBody: {
      objects: [
        "[\"account\",\"contact\"]",
      ],
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
import { SDKNodePlatformCore } from "@amp-labs/sdk-node-platform/core.js";
import { installationUnpauseReads } from "@amp-labs/sdk-node-platform/funcs/installationUnpauseReads.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await installationUnpauseReads(sdkNodePlatform, {
    projectIdOrName: "my-project",
    integrationId: "<id>",
    installationId: "<id>",
    requestBody: {
      objects: [
        "[\"account\",\"contact\"]",
      ],
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
| `request`                                                                                                                                                                      | [operations.UnpauseReadsRequest](../../models/operations/unpausereadsrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UnpauseReadsAPIProblem](../../models/operations/unpausereadsapiproblem.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.UnpauseReadsInputValidationProblem | 400                                       | application/problem+json                  |
| errors.APIError                           | 4XX, 5XX                                  | \*/\*                                     |