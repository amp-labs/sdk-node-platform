# UpdateInstallationResponse


## Supported Types

### `operations.UpdateInstallationInstallation`

```typescript
const value: operations.UpdateInstallationInstallation = {
  id: "<id>",
  projectId: "project-456",
  integrationId: "<id>",
  group: {
    groupRef: "group-123",
    groupName: "Super Customer",
    projectId: "project-456",
    createTime: new Date("2023-07-13T21:34:44.816Z"),
    updateTime: new Date("2023-07-13T21:34:44.816Z"),
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
      createTime: new Date("2025-01-02T01:12:02.820Z"),
    },
    group: {
      groupRef: "group-123",
      groupName: "Super Customer",
      projectId: "project-456",
      createTime: new Date("2023-07-13T21:34:44.816Z"),
      updateTime: new Date("2023-07-13T21:34:44.816Z"),
    },
    consumer: {
      consumerRef: "consumer-123",
      consumerName: "Super Customer",
      projectId: "project-456",
      createTime: new Date("2023-07-13T21:34:44.816Z"),
      updateTime: new Date("2023-07-13T21:34:44.816Z"),
    },
    providerWorkspaceRef: "provider-workspace-123",
    providerConsumerRef: "provider-consumer-123",
    createTime: new Date("2023-07-13T21:34:44.816Z"),
    updateTime: new Date("2023-07-13T21:34:44.816Z"),
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
  createTime: new Date("2024-09-13T12:38:37.596Z"),
  createdBy: "consumer:consumer-123",
  config: {
    id: "config-123",
    revisionId: "revision-123",
    createTime: new Date("2023-07-29T22:28:09.291Z"),
    createdBy: "builder:builder-123",
    content: {
      provider: "salesforce",
    },
  },
};
```

### `operations.UpdateInstallationAPIProblem`

```typescript
const value: operations.UpdateInstallationAPIProblem = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

