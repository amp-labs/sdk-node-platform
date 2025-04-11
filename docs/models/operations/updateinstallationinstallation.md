# UpdateInstallationInstallation

The updated installation

## Example Usage

```typescript
import { UpdateInstallationInstallation } from "@amp-labs/sdk-node-platform/models/operations";

let value: UpdateInstallationInstallation = {
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
      createTime: new Date("2023-11-30T11:37:06.676Z"),
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
  },
  createTime: new Date("2025-10-31T08:46:47.565Z"),
  createdBy: "consumer:consumer-123",
  config: {
    id: "config-123",
    revisionId: "revision-123",
    createTime: new Date("2023-06-01T18:36:40.232Z"),
    createdBy: "builder:builder-123",
    content: {
      provider: "salesforce",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The installation ID.                                                                                                 |                                                                                                                      |
| `projectId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The Ampersand project ID.                                                                                            | project-456                                                                                                          |
| `integrationId`                                                                                                      | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The integration ID.                                                                                                  |                                                                                                                      |
| `group`                                                                                                              | [operations.UpdateInstallationGroup](../../models/operations/updateinstallationgroup.md)                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `healthStatus`                                                                                                       | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The health status of the installation ("healthy", "unhealthy").                                                      | healthy                                                                                                              |
| `connection`                                                                                                         | [operations.UpdateInstallationConnection](../../models/operations/updateinstallationconnection.md)                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `createTime`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | The time the integration was first installed.                                                                        |                                                                                                                      |
| `createdBy`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The person who did the installation, in the format of "consumer:{consumer-id}".                                      | consumer:consumer-123                                                                                                |
| `updateTime`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_minus_sign:                                                                                                   | The time the installation was last updated with a new config.                                                        |                                                                                                                      |
| `config`                                                                                                             | [operations.UpdateInstallationInstallationsConfig](../../models/operations/updateinstallationinstallationsconfig.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |