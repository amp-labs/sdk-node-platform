# GetOperationResponse


## Supported Types

### `operations.GetOperationOperation`

```typescript
const value: operations.GetOperationOperation = {
  projectId: "project-456",
  integrationId: "<id>",
  configId: "config-123",
  actionType: "read",
  id: "<id>",
  installationId: "<id>",
  status: "success",
  result: "[object] No changes",
  metadata: {},
  createTime: new Date("2023-07-13T21:34:44.816Z"),
};
```

### `operations.GetOperationAPIProblem`

```typescript
const value: operations.GetOperationAPIProblem = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

