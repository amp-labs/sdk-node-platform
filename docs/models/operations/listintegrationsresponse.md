# ListIntegrationsResponse


## Supported Types

### `operations.ListIntegrationsIntegration[]`

```typescript
const value: operations.ListIntegrationsIntegration[] = [
  {
    id: "<id>",
    projectId: "project-456",
    name: "read-accounts",
    provider: "salesforce",
    createTime: new Date("2024-07-25T22:41:53.719Z"),
    latestRevision: {
      id: "revision-id-1",
      specVersion: "1.0.0",
      createTime: new Date("2024-03-30T11:16:03.610Z"),
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
                  fieldName: "<value>",
                  mapToName: "account_id",
                  mapToDisplayName: "Account ID",
                },
              ],
              optionalFields: [
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
          ],
        },
      },
    },
  },
];
```

### `operations.ListIntegrationsAPIProblem`

```typescript
const value: operations.ListIntegrationsAPIProblem = {
  type: "urn:problem-type:exampleOrganization:exampleProblem",
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

