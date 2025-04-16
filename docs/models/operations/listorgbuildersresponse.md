# ListOrgBuildersResponse


## Supported Types

### `operations.Builder[]`

```typescript
const value: operations.Builder[] = [
  {
    id: "builder-id-123",
    idpProvider: "clerk",
    idpRef: "<value>",
    createTime: new Date("2024-04-20T04:55:44.728Z"),
  },
];
```

### `operations.ListOrgBuildersAPIProblem`

```typescript
const value: operations.ListOrgBuildersAPIProblem = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

