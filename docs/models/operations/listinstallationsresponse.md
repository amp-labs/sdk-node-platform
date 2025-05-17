# ListInstallationsResponse


## Supported Types

### `operations.ListInstallationsInstallation[]`

```typescript
const value: operations.ListInstallationsInstallation[] = [
  {
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
        createTime: new Date("2023-02-05T09:34:38.778Z"),
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
    createTime: new Date("2023-06-03T10:54:09.863Z"),
    createdBy: "consumer:consumer-123",
    config: {
      id: "config-123",
      revisionId: "revision-123",
      createTime: new Date("2025-12-20T23:22:38.304Z"),
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
  },
];
```

### `operations.ListInstallationsAPIProblem`

```typescript
const value: operations.ListInstallationsAPIProblem = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

