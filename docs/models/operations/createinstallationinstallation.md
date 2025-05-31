# CreateInstallationInstallation

Created

## Example Usage

```typescript
import { CreateInstallationInstallation } from "@amp-labs/sdk-node-platform/models/operations";

let value: CreateInstallationInstallation = {
  id: "<id>",
  projectId: "project-456",
  integrationId: "<id>",
  group: {
    groupRef: "group-123",
    groupName: "Super Customer",
    projectId: "project-456",
    createTime: new Date("2023-07-13T21:34:44.816354Z"),
    updateTime: new Date("2023-07-13T21:34:44.816354Z"),
  },
  healthStatus: "healthy",
  connection: {
    id: "connection-123",
    projectId: "project-456",
    provider: "salesforce",
    providerApp: {
      id: "provider-app-123",
      projectId: "project-456",
      externalRef: "external-id-123",
      provider: "salesforce",
      clientId: "client-id-123",
      scopes: [
        "[\"oauth\",\"offline\",\"crm.read\"]",
      ],
      createTime: new Date("2024-03-03T18:36:16.968Z"),
    },
    group: {
      groupRef: "group-123",
      groupName: "Super Customer",
      projectId: "project-456",
      createTime: new Date("2023-07-13T21:34:44.816354Z"),
      updateTime: new Date("2023-07-13T21:34:44.816354Z"),
    },
    consumer: {
      consumerRef: "consumer-123",
      consumerName: "Super Customer",
      projectId: "project-456",
      createTime: new Date("2023-07-13T21:34:44.816354Z"),
      updateTime: new Date("2023-07-13T21:34:44.816354Z"),
    },
    providerWorkspaceRef: "provider-workspace-123",
    providerConsumerRef: "provider-consumer-123",
    createTime: new Date("2023-07-13T21:34:44.816354Z"),
    updateTime: new Date("2023-07-13T21:34:44.816354Z"),
    authScheme: "oauth2/authorizationCode",
    status: "working",
    oauth2AuthorizationCode: {
      accessToken: {
        token: "<value>",
        issuedAt: new Date("2024-04-22T18:55:28.456076Z"),
        expiresAt: new Date("2024-10-22T18:55:28.456076Z"),
      },
      refreshToken: {
        token: "<value>",
        issuedAt: new Date("2024-04-22T18:55:28.456076Z"),
        expiresAt: new Date("2024-10-22T18:55:28.456076Z"),
      },
    },
    apiKey: "api-key-123",
    providerMetadata: {
      "key": {
        value: "1234567890",
        source: "input",
        displayName: "Account ID",
      },
    },
  },
  createTime: new Date("2024-10-12T18:11:00.495Z"),
  createdBy: "consumer:consumer-123",
  config: {
    id: "config-123",
    revisionId: "revision-123",
    createTime: new Date("2023-06-07T23:57:11.785Z"),
    createdBy: "builder:builder-123",
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
        },
      },
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | The installation ID.                                                                               |                                                                                                    |
| `projectId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | The Ampersand project ID.                                                                          | project-456                                                                                        |
| `integrationId`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | The integration ID.                                                                                |                                                                                                    |
| `group`                                                                                            | [operations.CreateInstallationGroup](../../models/operations/createinstallationgroup.md)           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `healthStatus`                                                                                     | *string*                                                                                           | :heavy_check_mark:                                                                                 | The health status of the installation ("healthy", "unhealthy").                                    | healthy                                                                                            |
| `connection`                                                                                       | [operations.CreateInstallationConnection](../../models/operations/createinstallationconnection.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `createTime`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | The time the integration was first installed.                                                      |                                                                                                    |
| `createdBy`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | The person who did the installation, in the format of "consumer:{consumer-id}".                    | consumer:consumer-123                                                                              |
| `updateTime`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | The time the installation was last updated with a new config.                                      |                                                                                                    |
| `config`                                                                                           | [operations.CreateInstallationConfig](../../models/operations/createinstallationconfig.md)         | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |