# Connections
(*connections*)

## Overview

### Available Operations

* [list](#list) - List connections
* [generate](#generate) - Generate a new connection
* [get](#get) - Get a connection
* [update](#update) - Update a connection.
* [delete](#delete) - Delete a connection

## list

List connections

### Example Usage

```typescript
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.connections.list({
    projectIdOrName: "my-project",
    groupRef: "group-123",
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
import { connectionsList } from "@amp-labs/sdk-node-platform/funcs/connectionsList.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await connectionsList(sdkNodePlatform, {
    projectIdOrName: "my-project",
    groupRef: "group-123",
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
| `request`                                                                                                                                                                      | [operations.ListConnectionsRequest](../../models/operations/listconnectionsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListConnectionsResponse](../../models/operations/listconnectionsresponse.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.ListConnectionsInputValidationProblem | 404                                          | application/problem+json                     |
| errors.APIError                              | 4XX, 5XX                                     | \*/\*                                        |

## generate

For providers which support OAuth2 Authorization Code, it is recommended that you use the [/oauth-connect endpoint](https://docs.withampersand.com/reference/oauth/get-url-for-oauth-flow) instead, unless you already have the refresh token and are importing it into Ampersand.

### Example Usage

```typescript
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.connections.generate({
    projectIdOrName: "my-project",
    requestBody: {
      groupRef: "group-123",
      consumerRef: "<value>",
      provider: "<value>",
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
import { connectionsGenerate } from "@amp-labs/sdk-node-platform/funcs/connectionsGenerate.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await connectionsGenerate(sdkNodePlatform, {
    projectIdOrName: "my-project",
    requestBody: {
      groupRef: "group-123",
      consumerRef: "<value>",
      provider: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GenerateConnectionRequest](../../models/operations/generateconnectionrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenerateConnectionResponse](../../models/operations/generateconnectionresponse.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.GenerateConnectionInputValidationProblem            | 400                                                        | application/problem+json                                   |
| errors.GenerateConnectionConnectionsInputValidationProblem | 422                                                        | application/problem+json                                   |
| errors.APIError                                            | 4XX, 5XX                                                   | \*/\*                                                      |

## get

Get a connection

### Example Usage

```typescript
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.connections.get({
    projectIdOrName: "my-project",
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
import { SDKNodePlatformCore } from "@amp-labs/sdk-node-platform/core.js";
import { connectionsGet } from "@amp-labs/sdk-node-platform/funcs/connectionsGet.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await connectionsGet(sdkNodePlatform, {
    projectIdOrName: "my-project",
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
| `request`                                                                                                                                                                      | [operations.GetConnectionRequest](../../models/operations/getconnectionrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetConnectionResponse](../../models/operations/getconnectionresponse.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.GetConnectionInputValidationProblem | 404                                        | application/problem+json                   |
| errors.APIError                            | 4XX, 5XX                                   | \*/\*                                      |

## update

Update an existing connection.

### Example Usage

```typescript
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.connections.update({
    projectIdOrName: "<value>",
    connectionId: "<id>",
    requestBody: {
      updateMask: [
        "<value>",
        "<value>",
        "<value>",
      ],
      connection: {
        groupRef: "group-123",
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
import { SDKNodePlatformCore } from "@amp-labs/sdk-node-platform/core.js";
import { connectionsUpdate } from "@amp-labs/sdk-node-platform/funcs/connectionsUpdate.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await connectionsUpdate(sdkNodePlatform, {
    projectIdOrName: "<value>",
    connectionId: "<id>",
    requestBody: {
      updateMask: [
        "<value>",
        "<value>",
        "<value>",
      ],
      connection: {
        groupRef: "group-123",
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
| `request`                                                                                                                                                                      | [operations.UpdateConnectionRequest](../../models/operations/updateconnectionrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateConnectionResponse](../../models/operations/updateconnectionresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.UpdateConnectionInputValidationProblem | 400                                           | application/problem+json                      |
| errors.APIError                               | 4XX, 5XX                                      | \*/\*                                         |

## delete

Delete a connection

### Example Usage

```typescript
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.connections.delete({
    projectIdOrName: "my-project",
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
import { SDKNodePlatformCore } from "@amp-labs/sdk-node-platform/core.js";
import { connectionsDelete } from "@amp-labs/sdk-node-platform/funcs/connectionsDelete.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await connectionsDelete(sdkNodePlatform, {
    projectIdOrName: "my-project",
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
| `request`                                                                                                                                                                      | [operations.DeleteConnectionRequest](../../models/operations/deleteconnectionrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteConnectionAPIProblem](../../models/operations/deleteconnectionapiproblem.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |