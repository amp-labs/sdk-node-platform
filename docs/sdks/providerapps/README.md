# ProviderApps
(*providerApps*)

## Overview

### Available Operations

* [list](#list) - List provider apps
* [create](#create) - Create a new provider app
* [delete](#delete) - Delete a provider app.
* [update](#update) - Update a provider app

## list

List provider apps

### Example Usage

```typescript
import { SDKNodePlatform } from "sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.providerApps.list({
    projectIdOrName: "my-project",
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
import { providerAppsList } from "sdk-node-platform/funcs/providerAppsList.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await providerAppsList(sdkNodePlatform, {
    projectIdOrName: "my-project",
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
| `request`                                                                                                                                                                      | [operations.ListProviderAppsRequest](../../models/operations/listproviderappsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListProviderAppsResponse](../../models/operations/listproviderappsresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.ListProviderAppsInputValidationProblem | 422                                           | application/problem+json                      |
| errors.APIError                               | 4XX, 5XX                                      | \*/\*                                         |

## create

Create a new provider app

### Example Usage

```typescript
import { SDKNodePlatform } from "sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.providerApps.create({
    projectIdOrName: "my-project",
    requestBody: {
      externalRef: "external-id-123",
      provider: "salesforce",
      clientId: "client-id-123",
      clientSecret: "client-secret-123",
      scopes: [
        "[\"read\",\"write\"]",
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
import { SDKNodePlatformCore } from "sdk-node-platform/core.js";
import { providerAppsCreate } from "sdk-node-platform/funcs/providerAppsCreate.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await providerAppsCreate(sdkNodePlatform, {
    projectIdOrName: "my-project",
    requestBody: {
      externalRef: "external-id-123",
      provider: "salesforce",
      clientId: "client-id-123",
      clientSecret: "client-secret-123",
      scopes: [
        "[\"read\",\"write\"]",
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
| `request`                                                                                                                                                                      | [operations.CreateProviderAppRequest](../../models/operations/createproviderapprequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateProviderAppResponse](../../models/operations/createproviderappresponse.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.CreateProviderAppInputValidationProblem             | 400                                                        | application/problem+json                                   |
| errors.CreateProviderAppProviderAppsInputValidationProblem | 422                                                        | application/problem+json                                   |
| errors.APIError                                            | 4XX, 5XX                                                   | \*/\*                                                      |

## delete

Delete a provider app.

### Example Usage

```typescript
import { SDKNodePlatform } from "sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.providerApps.delete({
    projectIdOrName: "my-project",
    providerAppId: "32356abe-d2fd-49c7-9030-abdcbc6456d4",
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
import { providerAppsDelete } from "sdk-node-platform/funcs/providerAppsDelete.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await providerAppsDelete(sdkNodePlatform, {
    projectIdOrName: "my-project",
    providerAppId: "32356abe-d2fd-49c7-9030-abdcbc6456d4",
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
| `request`                                                                                                                                                                      | [operations.DeleteProviderAppRequest](../../models/operations/deleteproviderapprequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteProviderAppAPIProblem](../../models/operations/deleteproviderappapiproblem.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.DeleteProviderAppInputValidationProblem | 422                                            | application/problem+json                       |
| errors.APIError                                | 4XX, 5XX                                       | \*/\*                                          |

## update

Update a provider app

### Example Usage

```typescript
import { SDKNodePlatform } from "sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.providerApps.update({
    projectIdOrName: "my-project",
    providerAppId: "32356abe-d2fd-49c7-9030-abdcbc6456d4",
    requestBody: {
      updateMask: [
        "externalRef",
        "provider",
        "clientId",
        "clientSecret",
      ],
      providerApp: {
        externalRef: "external-id-123",
        provider: "salesforce",
        clientId: "client-id-123",
        clientSecret: "client-secret-123",
        scopes: [
          "[\"read\",\"write\"]",
        ],
      },
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
import { providerAppsUpdate } from "sdk-node-platform/funcs/providerAppsUpdate.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await providerAppsUpdate(sdkNodePlatform, {
    projectIdOrName: "my-project",
    providerAppId: "32356abe-d2fd-49c7-9030-abdcbc6456d4",
    requestBody: {
      updateMask: [
        "externalRef",
        "provider",
        "clientId",
        "clientSecret",
      ],
      providerApp: {
        externalRef: "external-id-123",
        provider: "salesforce",
        clientId: "client-id-123",
        clientSecret: "client-secret-123",
        scopes: [
          "[\"read\",\"write\"]",
        ],
      },
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
| `request`                                                                                                                                                                      | [operations.UpdateProviderAppRequest](../../models/operations/updateproviderapprequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateProviderAppResponse](../../models/operations/updateproviderappresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.UpdateProviderAppInputValidationProblem | 400                                            | application/problem+json                       |
| errors.APIError                                | 4XX, 5XX                                       | \*/\*                                          |