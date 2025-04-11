# GenerateUploadUrlResponse


## Supported Types

### `operations.GenerateUploadURLSignedURL`

```typescript
const value: operations.GenerateUploadURLSignedURL = {
  url: "https://competent-newsstand.info/",
  bucket: "<value>",
  path: "/usr/src",
};
```

### `operations.GenerateUploadUrlAPIProblem`

```typescript
const value: operations.GenerateUploadUrlAPIProblem = {
  type: "urn:problem-type:exampleOrganization:exampleProblem",
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

