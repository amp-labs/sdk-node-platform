# ListOperationLogsResponse


## Supported Types

### `operations.Log[]`

```typescript
const value: operations.Log[] = [
  {
    timestamp: "2023-07-13T21:34:44.816354Z",
    message: {
      msg: "This is a log message",
    },
    severity: "DEBUG",
  },
];
```

### `operations.ListOperationLogsAPIProblem`

```typescript
const value: operations.ListOperationLogsAPIProblem = {
  type: "urn:problem-type:exampleOrganization:exampleProblem",
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

