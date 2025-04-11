# ListProjectsResponse


## Supported Types

### `operations.ListProjectsProject[]`

```typescript
const value: operations.ListProjectsProject[] = [
  {
    id: "my-project",
    name: "mailmonkey-staging",
    appName: "MailMonkey",
    orgId: "9f7c3e2a-61b8-4f5c-8d1a-eb24f3b05d79",
    createTime: new Date("2025-02-22T20:20:27.935Z"),
  },
];
```

### `operations.ListProjectsAPIProblem`

```typescript
const value: operations.ListProjectsAPIProblem = {
  type: "urn:problem-type:exampleOrganization:exampleProblem",
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

