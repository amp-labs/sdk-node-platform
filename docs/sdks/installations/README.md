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
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

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
import { SDKNodePlatformCore } from "@amp-labs/sdk-node-platform/core.js";
import { installationsList } from "@amp-labs/sdk-node-platform/funcs/installationsList.js";

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
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

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
          read: {
            objects: {
              "key": {
                objectName: "account",
                schedule: "*/15 * * * *",
                destination: "accountWebhook",
                selectedFields: {
                  "key": false,
                  "key1": true,
                },
                selectedValueMappings: {
                  "stage": {
                    "open": "scheduled",
                    "closedWon": "won",
                    "closedLost": "lost",
                  },
                },
                selectedFieldMappings: {

                },
                backfill: {
                  defaultPeriod: {
                    days: 30,
                    fullHistory: false,
                  },
                },
              },
              "key1": {
                objectName: "account",
                schedule: "*/15 * * * *",
                destination: "accountWebhook",
                selectedFields: {
                  "key": false,
                  "key1": true,
                },
                selectedValueMappings: {
                  "stage": {
                    "open": "scheduled",
                    "closedWon": "won",
                    "closedLost": "lost",
                  },
                },
                selectedFieldMappings: {

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
          subscribe: {
            objects: {
              "key": {
                inheritFieldsAndMappings: true,
                objectName: "account",
                destination: "accountWebhook",
                updateEvent: {
                  enabled: "always",
                  watchFieldsAuto: "all",
                  requiredWatchFields: [
                    "name",
                    "description",
                  ],
                },
                deleteEvent: {
                  enabled: "always",
                },
              },
              "key1": {
                inheritFieldsAndMappings: true,
                objectName: "account",
                destination: "accountWebhook",
                updateEvent: {
                  enabled: "always",
                  watchFieldsAuto: "all",
                  requiredWatchFields: [
                    "name",
                    "description",
                  ],
                },
                deleteEvent: {
                  enabled: "always",
                },
              },
              "key2": {
                inheritFieldsAndMappings: true,
                objectName: "account",
                destination: "accountWebhook",
                updateEvent: {
                  enabled: "always",
                  watchFieldsAuto: "all",
                  requiredWatchFields: [
                    "name",
                    "description",
                  ],
                },
                deleteEvent: {
                  enabled: "always",
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
import { SDKNodePlatformCore } from "@amp-labs/sdk-node-platform/core.js";
import { installationsCreate } from "@amp-labs/sdk-node-platform/funcs/installationsCreate.js";

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
          read: {
            objects: {
              "key": {
                objectName: "account",
                schedule: "*/15 * * * *",
                destination: "accountWebhook",
                selectedFields: {
                  "key": false,
                  "key1": true,
                },
                selectedValueMappings: {
                  "stage": {
                    "open": "scheduled",
                    "closedWon": "won",
                    "closedLost": "lost",
                  },
                },
                selectedFieldMappings: {
  
                },
                backfill: {
                  defaultPeriod: {
                    days: 30,
                    fullHistory: false,
                  },
                },
              },
              "key1": {
                objectName: "account",
                schedule: "*/15 * * * *",
                destination: "accountWebhook",
                selectedFields: {
                  "key": false,
                  "key1": true,
                },
                selectedValueMappings: {
                  "stage": {
                    "open": "scheduled",
                    "closedWon": "won",
                    "closedLost": "lost",
                  },
                },
                selectedFieldMappings: {
  
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
          subscribe: {
            objects: {
              "key": {
                inheritFieldsAndMappings: true,
                objectName: "account",
                destination: "accountWebhook",
                updateEvent: {
                  enabled: "always",
                  watchFieldsAuto: "all",
                  requiredWatchFields: [
                    "name",
                    "description",
                  ],
                },
                deleteEvent: {
                  enabled: "always",
                },
              },
              "key1": {
                inheritFieldsAndMappings: true,
                objectName: "account",
                destination: "accountWebhook",
                updateEvent: {
                  enabled: "always",
                  watchFieldsAuto: "all",
                  requiredWatchFields: [
                    "name",
                    "description",
                  ],
                },
                deleteEvent: {
                  enabled: "always",
                },
              },
              "key2": {
                inheritFieldsAndMappings: true,
                objectName: "account",
                destination: "accountWebhook",
                updateEvent: {
                  enabled: "always",
                  watchFieldsAuto: "all",
                  requiredWatchFields: [
                    "name",
                    "description",
                  ],
                },
                deleteEvent: {
                  enabled: "always",
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
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

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
import { SDKNodePlatformCore } from "@amp-labs/sdk-node-platform/core.js";
import { installationsGet } from "@amp-labs/sdk-node-platform/funcs/installationsGet.js";

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
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

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
import { SDKNodePlatformCore } from "@amp-labs/sdk-node-platform/core.js";
import { installationsDelete } from "@amp-labs/sdk-node-platform/funcs/installationsDelete.js";

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
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

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
                    "key": false,
                    "key1": false,
                    "key2": true,
                  },
                  selectedValueMappings: {
                    "stage": {
                      "open": "scheduled",
                      "closedWon": "won",
                      "closedLost": "lost",
                    },
                  },
                  selectedFieldMappings: {
                    "key": "<value>",
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
import { SDKNodePlatformCore } from "@amp-labs/sdk-node-platform/core.js";
import { installationsUpdate } from "@amp-labs/sdk-node-platform/funcs/installationsUpdate.js";

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
                    "key": false,
                    "key1": false,
                    "key2": true,
                  },
                  selectedValueMappings: {
                    "stage": {
                      "open": "scheduled",
                      "closedWon": "won",
                      "closedLost": "lost",
                    },
                  },
                  selectedFieldMappings: {
                    "key": "<value>",
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