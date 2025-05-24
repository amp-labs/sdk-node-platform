# Oauth
(*oauth*)

## Overview

### Available Operations

* [connect](#connect) - Get URL for OAuth flow
* [update](#update) - Get URL for updating OAuth connection

## connect

Generate a URL for the browser to render to kick off OAuth flow.

### Example Usage

```typescript
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.oauth.connect({
    providerWorkspaceRef: "salesforce-instance-domain",
    providerMetadata: {
      "key": {
        value: "1234567890",
        source: "input",
        displayName: "Account ID",
      },
      "key1": {
        value: "1234567890",
        source: "input",
        displayName: "Account ID",
      },
      "key2": {
        value: "1234567890",
        source: "input",
        displayName: "Account ID",
      },
    },
    projectId: "my-project",
    groupRef: "group-123",
    groupName: "Organization Name",
    consumerRef: "user_123456",
    consumerName: "John Doe",
    providerAppId: "32356abe-d2fd-49c7-9030-abdcbc6456d4",
    provider: "salesforce",
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
import { oauthConnect } from "@amp-labs/sdk-node-platform/funcs/oauthConnect.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await oauthConnect(sdkNodePlatform, {
    providerWorkspaceRef: "salesforce-instance-domain",
    providerMetadata: {
      "key": {
        value: "1234567890",
        source: "input",
        displayName: "Account ID",
      },
      "key1": {
        value: "1234567890",
        source: "input",
        displayName: "Account ID",
      },
      "key2": {
        value: "1234567890",
        source: "input",
        displayName: "Account ID",
      },
    },
    projectId: "my-project",
    groupRef: "group-123",
    groupName: "Organization Name",
    consumerRef: "user_123456",
    consumerName: "John Doe",
    providerAppId: "32356abe-d2fd-49c7-9030-abdcbc6456d4",
    provider: "salesforce",
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
| `request`                                                                                                                                                                      | [operations.OauthConnectRequestBody](../../models/operations/oauthconnectrequestbody.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.OauthConnectResponse](../../models/operations/oauthconnectresponse.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.OauthConnectInputValidationProblem | 400                                       | application/problem+json                  |
| errors.APIError                           | 4XX, 5XX                                  | \*/\*                                     |

## update

Generate a URL for the browser to render to kick off OAuth flow that updates an existing connection.

### Example Usage

```typescript
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.oauth.update({
    projectIdOrName: "<value>",
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
import { oauthUpdate } from "@amp-labs/sdk-node-platform/funcs/oauthUpdate.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await oauthUpdate(sdkNodePlatform, {
    projectIdOrName: "<value>",
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
| `request`                                                                                                                                                                      | [operations.OauthUpdateRequest](../../models/operations/oauthupdaterequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.OauthUpdateResponse](../../models/operations/oauthupdateresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.OauthUpdateInputValidationProblem | 400                                      | application/problem+json                 |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |