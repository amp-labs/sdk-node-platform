# Installations
(*installations*)

## Overview

### Available Operations

* [list](#list) - List installations
* [create](#create) - Create a new installation
* [get](#get) - Get an installation
* [delete](#delete) - Delete an installation
* [update](#update) - Update an installation

## list

List installations

### Example Usage

```typescript
import { SDKNodePlatform } from "sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.installations.list({
    projectIdOrName: "my-project",
    integrationId: "<id>",
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
import { SDKNodePlatformCore } from "sdk-node-platform/core.js";
import { installationsList } from "sdk-node-platform/funcs/installationsList.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await installationsList(sdkNodePlatform, {
    projectIdOrName: "my-project",
    integrationId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.ListInstallationsRequest](../../models/operations/listinstallationsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListInstallationsResponse](../../models/operations/listinstallationsresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.ListInstallationsInputValidationProblem | 400                                            | application/problem+json                       |
| errors.APIError                                | 4XX, 5XX                                       | \*/\*                                          |

## create

Create a new installation

### Example Usage

```typescript
import { SDKNodePlatform } from "sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.installations.create({
    projectIdOrName: "my-project",
    integrationId: "<id>",
    requestBody: {
      groupRef: "group-123",
      config: {
        content: {
          provider: "salesforce",
        },
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
import { installationsCreate } from "sdk-node-platform/funcs/installationsCreate.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await installationsCreate(sdkNodePlatform, {
    projectIdOrName: "my-project",
    integrationId: "<id>",
    requestBody: {
      groupRef: "group-123",
      config: {
        content: {
          provider: "salesforce",
        },
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
| `request`                                                                                                                                                                      | [operations.CreateInstallationRequest](../../models/operations/createinstallationrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateInstallationResponse](../../models/operations/createinstallationresponse.md)\>**

### Errors

| Error Type                                                   | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| errors.CreateInstallationInputValidationProblem              | 400                                                          | application/problem+json                                     |
| errors.CreateInstallationInstallationsInputValidationProblem | 422                                                          | application/problem+json                                     |
| errors.APIError                                              | 4XX, 5XX                                                     | \*/\*                                                        |

## get

Get an installation

### Example Usage

```typescript
import { SDKNodePlatform } from "sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.installations.get({
    projectIdOrName: "my-project",
    integrationId: "<id>",
    installationId: "<id>",
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
import { installationsGet } from "sdk-node-platform/funcs/installationsGet.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await installationsGet(sdkNodePlatform, {
    projectIdOrName: "my-project",
    integrationId: "<id>",
    installationId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.GetInstallationRequest](../../models/operations/getinstallationrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetInstallationResponse](../../models/operations/getinstallationresponse.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.GetInstallationInputValidationProblem | 400                                          | application/problem+json                     |
| errors.APIError                              | 4XX, 5XX                                     | \*/\*                                        |

## delete

Delete an installation

### Example Usage

```typescript
import { SDKNodePlatform } from "sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.installations.delete({
    projectIdOrName: "my-project",
    integrationId: "<id>",
    installationId: "<id>",
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
import { installationsDelete } from "sdk-node-platform/funcs/installationsDelete.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await installationsDelete(sdkNodePlatform, {
    projectIdOrName: "my-project",
    integrationId: "<id>",
    installationId: "<id>",
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
| `request`                                                                                                                                                                      | [operations.DeleteInstallationRequest](../../models/operations/deleteinstallationrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteInstallationAPIProblem](../../models/operations/deleteinstallationapiproblem.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## update

Update an installation

### Example Usage

```typescript
import { SDKNodePlatform } from "sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.installations.update({
    projectIdOrName: "my-project",
    integrationId: "<id>",
    installationId: "<id>",
    requestBody: {
      updateMask: [
        "connectionId",
        "config.content.write.objects.account",
        "config.content.write.objects.interview\.leads",
      ],
      installation: {
        connectionId: "connection-123",
        config: {
          content: {
            provider: "salesforce",
            read: {
              objects: {
                "key": {
                  objectName: "account",
                  schedule: "*/15 * * * *",
                  destination: "accountWebhook",
                  selectedFields: {
                    "0": true,
                    "1": true,
                    "2": true,
                    "3": true,
                    "4": true,
                    "5": true,
                    "6": true,
                    "7": true,
                    "8": true,
                    "9": true,
                    "10": true,
                    "11": true,
                    "12": true,
                    "13": true,
                    "14": true,
                    "15": true,
                    "16": true,
                    "17": true,
                    "18": true,
                    "19": true,
                    "20": true,
                    "21": true,
                    "22": true,
                    "23": true,
                    "24": true,
                    "25": true,
                  },
                  selectedValueMappings: {
                    "stage": {
                      "open": "scheduled",
                      "closedWon": "won",
                      "closedLost": "lost",
                    },
                  },
                  selectedFieldMappings: {
                    "0": "{",
                    "1": " ",
                    "2": "p",
                    "3": "h",
                    "4": "o",
                    "5": "n",
                    "6": "e",
                    "7": "N",
                    "8": "u",
                    "9": "m",
                    "10": "b",
                    "11": "e",
                    "12": "r",
                    "13": ":",
                    "14": " ",
                    "15": "p",
                    "16": "h",
                    "17": "o",
                    "18": "n",
                    "19": "e",
                    "20": ",",
                    "21": " ",
                    "22": "f",
                    "23": "a",
                    "24": "x",
                    "25": "N",
                    "26": "u",
                    "27": "m",
                    "28": "b",
                    "29": "e",
                    "30": "r",
                    "31": ":",
                    "32": " ",
                    "33": "f",
                    "34": "a",
                    "35": "x",
                    "36": " ",
                    "37": "}",
                  },
                  backfill: {
                    defaultPeriod: {
                      days: 30,
                      fullHistory: false,
                    },
                  },
                },
              },
            },
            write: {
              objects: {
                "key": {
                  objectName: "account",
                },
                "key1": {
                  objectName: "account",
                },
                "key2": {
                  objectName: "account",
                },
              },
            },
          },
        },
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
import { installationsUpdate } from "sdk-node-platform/funcs/installationsUpdate.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await installationsUpdate(sdkNodePlatform, {
    projectIdOrName: "my-project",
    integrationId: "<id>",
    installationId: "<id>",
    requestBody: {
      updateMask: [
        "connectionId",
        "config.content.write.objects.account",
        "config.content.write.objects.interview\.leads",
      ],
      installation: {
        connectionId: "connection-123",
        config: {
          content: {
            provider: "salesforce",
            read: {
              objects: {
                "key": {
                  objectName: "account",
                  schedule: "*/15 * * * *",
                  destination: "accountWebhook",
                  selectedFields: {
                    "0": true,
                    "1": true,
                    "2": true,
                    "3": true,
                    "4": true,
                    "5": true,
                    "6": true,
                    "7": true,
                    "8": true,
                    "9": true,
                    "10": true,
                    "11": true,
                    "12": true,
                    "13": true,
                    "14": true,
                    "15": true,
                    "16": true,
                    "17": true,
                    "18": true,
                    "19": true,
                    "20": true,
                    "21": true,
                    "22": true,
                    "23": true,
                    "24": true,
                    "25": true,
                  },
                  selectedValueMappings: {
                    "stage": {
                      "open": "scheduled",
                      "closedWon": "won",
                      "closedLost": "lost",
                    },
                  },
                  selectedFieldMappings: {
                    "0": "{",
                    "1": " ",
                    "2": "p",
                    "3": "h",
                    "4": "o",
                    "5": "n",
                    "6": "e",
                    "7": "N",
                    "8": "u",
                    "9": "m",
                    "10": "b",
                    "11": "e",
                    "12": "r",
                    "13": ":",
                    "14": " ",
                    "15": "p",
                    "16": "h",
                    "17": "o",
                    "18": "n",
                    "19": "e",
                    "20": ",",
                    "21": " ",
                    "22": "f",
                    "23": "a",
                    "24": "x",
                    "25": "N",
                    "26": "u",
                    "27": "m",
                    "28": "b",
                    "29": "e",
                    "30": "r",
                    "31": ":",
                    "32": " ",
                    "33": "f",
                    "34": "a",
                    "35": "x",
                    "36": " ",
                    "37": "}",
                  },
                  backfill: {
                    defaultPeriod: {
                      days: 30,
                      fullHistory: false,
                    },
                  },
                },
              },
            },
            write: {
              objects: {
                "key": {
                  objectName: "account",
                },
                "key1": {
                  objectName: "account",
                },
                "key2": {
                  objectName: "account",
                },
              },
            },
          },
        },
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
| `request`                                                                                                                                                                      | [operations.UpdateInstallationRequest](../../models/operations/updateinstallationrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateInstallationResponse](../../models/operations/updateinstallationresponse.md)\>**

### Errors

| Error Type                                                   | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| errors.UpdateInstallationInputValidationProblem              | 400                                                          | application/problem+json                                     |
| errors.UpdateInstallationInstallationsInputValidationProblem | 422                                                          | application/problem+json                                     |
| errors.APIError                                              | 4XX, 5XX                                                     | \*/\*                                                        |