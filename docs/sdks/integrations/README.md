# Integrations
(*integrations*)

## Overview

### Available Operations

* [list](#list) - List integrations
* [create](#create) - Create a new integration.
* [delete](#delete) - Delete an integration
* [batchUpsert](#batchupsert) - Batch upsert a group of integrations

## list

List integrations

### Example Usage

```typescript
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.integrations.list({
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
import { SDKNodePlatformCore } from "@amp-labs/sdk-node-platform/core.js";
import { integrationsList } from "@amp-labs/sdk-node-platform/funcs/integrationsList.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await integrationsList(sdkNodePlatform, {
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
| `request`                                                                                                                                                                      | [operations.ListIntegrationsRequest](../../models/operations/listintegrationsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListIntegrationsResponse](../../models/operations/listintegrationsresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.ListIntegrationsInputValidationProblem | 422                                           | application/problem+json                      |
| errors.APIError                               | 4XX, 5XX                                      | \*/\*                                         |

## create

Create a new integration.

### Example Usage

```typescript
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.integrations.create({
    projectIdOrName: "my-project",
    requestBody: {
      name: "my-integration",
      provider: "<value>",
      latestRevision: {
        specVersion: "1.0.0",
        content: {
          name: "<value>",
          provider: "<value>",
          read: {
            objects: [
              {
                objectName: "<value>",
                destination: "<value>",
                schedule: "<value>",
                mapToName: "people",
                mapToDisplayName: "People",
                requiredFields: [
                  {
                    mapToName: "<value>",
                  },
                  {
                    fieldName: "<value>",
                    mapToName: "account_id",
                    mapToDisplayName: "Account ID",
                  },
                  {
                    mapToName: "<value>",
                  },
                ],
                optionalFields: [
                  {
                    fieldName: "<value>",
                    mapToName: "account_id",
                    mapToDisplayName: "Account ID",
                  },
                  {
                    mapToName: "<value>",
                  },
                ],
                backfill: {
                  defaultPeriod: {
                    days: 30,
                    fullHistory: false,
                  },
                },
              },
              {
                objectName: "<value>",
                destination: "<value>",
                schedule: "<value>",
                mapToName: "people",
                mapToDisplayName: "People",
                requiredFields: [
                  {
                    mapToName: "<value>",
                  },
                  {
                    fieldName: "<value>",
                    mapToName: "account_id",
                    mapToDisplayName: "Account ID",
                  },
                  {
                    mapToName: "<value>",
                  },
                ],
                optionalFields: [
                  {
                    fieldName: "<value>",
                    mapToName: "account_id",
                    mapToDisplayName: "Account ID",
                  },
                  {
                    mapToName: "<value>",
                  },
                ],
                backfill: {
                  defaultPeriod: {
                    days: 30,
                    fullHistory: false,
                  },
                },
              },
              {
                objectName: "<value>",
                destination: "<value>",
                schedule: "<value>",
                mapToName: "people",
                mapToDisplayName: "People",
                requiredFields: [
                  {
                    mapToName: "<value>",
                  },
                  {
                    fieldName: "<value>",
                    mapToName: "account_id",
                    mapToDisplayName: "Account ID",
                  },
                  {
                    mapToName: "<value>",
                  },
                ],
                optionalFields: [
                  {
                    fieldName: "<value>",
                    mapToName: "account_id",
                    mapToDisplayName: "Account ID",
                  },
                  {
                    mapToName: "<value>",
                  },
                ],
                backfill: {
                  defaultPeriod: {
                    days: 30,
                    fullHistory: false,
                  },
                },
              },
            ],
          },
          write: {
            objects: [
              {
                objectName: "<value>",
                inheritMapping: true,
                valueDefaults: {
                  allowAnyFields: true,
                },
              },
            ],
          },
          subscribe: {
            objects: [
              {
                objectName: "<value>",
                destination: "<value>",
                inheritFieldsAndMapping: true,
                updateEvent: {
                  watchFieldsAuto: "all",
                  requiredWatchFields: [
                    "[\"name\",\"domain\"]",
                  ],
                },
                otherEvents: [
                  "[\"object.merged\",\"object.restored\"]",
                ],
              },
              {
                objectName: "<value>",
                destination: "<value>",
                inheritFieldsAndMapping: true,
                updateEvent: {
                  watchFieldsAuto: "all",
                  requiredWatchFields: [
                    "[\"name\",\"domain\"]",
                  ],
                },
                otherEvents: [
                  "[\"object.merged\",\"object.restored\"]",
                ],
              },
              {
                objectName: "<value>",
                destination: "<value>",
                inheritFieldsAndMapping: true,
                updateEvent: {
                  watchFieldsAuto: "all",
                  requiredWatchFields: [
                    "[\"name\",\"domain\"]",
                  ],
                },
                otherEvents: [
                  "[\"object.merged\",\"object.restored\"]",
                ],
              },
            ],
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
import { integrationsCreate } from "@amp-labs/sdk-node-platform/funcs/integrationsCreate.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await integrationsCreate(sdkNodePlatform, {
    projectIdOrName: "my-project",
    requestBody: {
      name: "my-integration",
      provider: "<value>",
      latestRevision: {
        specVersion: "1.0.0",
        content: {
          name: "<value>",
          provider: "<value>",
          read: {
            objects: [
              {
                objectName: "<value>",
                destination: "<value>",
                schedule: "<value>",
                mapToName: "people",
                mapToDisplayName: "People",
                requiredFields: [
                  {
                    mapToName: "<value>",
                  },
                  {
                    fieldName: "<value>",
                    mapToName: "account_id",
                    mapToDisplayName: "Account ID",
                  },
                  {
                    mapToName: "<value>",
                  },
                ],
                optionalFields: [
                  {
                    fieldName: "<value>",
                    mapToName: "account_id",
                    mapToDisplayName: "Account ID",
                  },
                  {
                    mapToName: "<value>",
                  },
                ],
                backfill: {
                  defaultPeriod: {
                    days: 30,
                    fullHistory: false,
                  },
                },
              },
              {
                objectName: "<value>",
                destination: "<value>",
                schedule: "<value>",
                mapToName: "people",
                mapToDisplayName: "People",
                requiredFields: [
                  {
                    mapToName: "<value>",
                  },
                  {
                    fieldName: "<value>",
                    mapToName: "account_id",
                    mapToDisplayName: "Account ID",
                  },
                  {
                    mapToName: "<value>",
                  },
                ],
                optionalFields: [
                  {
                    fieldName: "<value>",
                    mapToName: "account_id",
                    mapToDisplayName: "Account ID",
                  },
                  {
                    mapToName: "<value>",
                  },
                ],
                backfill: {
                  defaultPeriod: {
                    days: 30,
                    fullHistory: false,
                  },
                },
              },
              {
                objectName: "<value>",
                destination: "<value>",
                schedule: "<value>",
                mapToName: "people",
                mapToDisplayName: "People",
                requiredFields: [
                  {
                    mapToName: "<value>",
                  },
                  {
                    fieldName: "<value>",
                    mapToName: "account_id",
                    mapToDisplayName: "Account ID",
                  },
                  {
                    mapToName: "<value>",
                  },
                ],
                optionalFields: [
                  {
                    fieldName: "<value>",
                    mapToName: "account_id",
                    mapToDisplayName: "Account ID",
                  },
                  {
                    mapToName: "<value>",
                  },
                ],
                backfill: {
                  defaultPeriod: {
                    days: 30,
                    fullHistory: false,
                  },
                },
              },
            ],
          },
          write: {
            objects: [
              {
                objectName: "<value>",
                inheritMapping: true,
                valueDefaults: {
                  allowAnyFields: true,
                },
              },
            ],
          },
          subscribe: {
            objects: [
              {
                objectName: "<value>",
                destination: "<value>",
                inheritFieldsAndMapping: true,
                updateEvent: {
                  watchFieldsAuto: "all",
                  requiredWatchFields: [
                    "[\"name\",\"domain\"]",
                  ],
                },
                otherEvents: [
                  "[\"object.merged\",\"object.restored\"]",
                ],
              },
              {
                objectName: "<value>",
                destination: "<value>",
                inheritFieldsAndMapping: true,
                updateEvent: {
                  watchFieldsAuto: "all",
                  requiredWatchFields: [
                    "[\"name\",\"domain\"]",
                  ],
                },
                otherEvents: [
                  "[\"object.merged\",\"object.restored\"]",
                ],
              },
              {
                objectName: "<value>",
                destination: "<value>",
                inheritFieldsAndMapping: true,
                updateEvent: {
                  watchFieldsAuto: "all",
                  requiredWatchFields: [
                    "[\"name\",\"domain\"]",
                  ],
                },
                otherEvents: [
                  "[\"object.merged\",\"object.restored\"]",
                ],
              },
            ],
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
| `request`                                                                                                                                                                      | [operations.CreateIntegrationRequest](../../models/operations/createintegrationrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateIntegrationAPIProblem](../../models/operations/createintegrationapiproblem.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.CreateIntegrationInputValidationProblem             | 400                                                        | application/problem+json                                   |
| errors.CreateIntegrationIntegrationsInputValidationProblem | 422                                                        | application/problem+json                                   |
| errors.APIError                                            | 4XX, 5XX                                                   | \*/\*                                                      |

## delete

Delete an integration

### Example Usage

```typescript
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.integrations.delete({
    projectIdOrName: "my-project",
    integrationId: "123e4567-e89b-12d3-a456-426614174000",
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
import { integrationsDelete } from "@amp-labs/sdk-node-platform/funcs/integrationsDelete.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await integrationsDelete(sdkNodePlatform, {
    projectIdOrName: "my-project",
    integrationId: "123e4567-e89b-12d3-a456-426614174000",
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
| `request`                                                                                                                                                                      | [operations.DeleteIntegrationRequest](../../models/operations/deleteintegrationrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteIntegrationAPIProblem](../../models/operations/deleteintegrationapiproblem.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.DeleteIntegrationInputValidationProblem             | 404                                                        | application/problem+json                                   |
| errors.DeleteIntegrationIntegrationsInputValidationProblem | 422                                                        | application/problem+json                                   |
| errors.APIError                                            | 4XX, 5XX                                                   | \*/\*                                                      |

## batchUpsert

Batch upsert a group of integrations

### Example Usage

```typescript
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.integrations.batchUpsert({
    projectIdOrName: "my-project",
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
import { SDKNodePlatformCore } from "@amp-labs/sdk-node-platform/core.js";
import { integrationsBatchUpsert } from "@amp-labs/sdk-node-platform/funcs/integrationsBatchUpsert.js";

// Use `SDKNodePlatformCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdkNodePlatform = new SDKNodePlatformCore({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await integrationsBatchUpsert(sdkNodePlatform, {
    projectIdOrName: "my-project",
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
| `request`                                                                                                                                                                      | [operations.BatchUpsertIntegrationsRequest](../../models/operations/batchupsertintegrationsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.BatchUpsertIntegrationsResponse](../../models/operations/batchupsertintegrationsresponse.md)\>**

### Errors

| Error Type                                           | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.BatchUpsertIntegrationsInputValidationProblem | 422                                                  | application/problem+json                             |
| errors.APIError                                      | 4XX, 5XX                                             | \*/\*                                                |