# GetHydratedRevisionResponse


## Supported Types

### `operations.GetHydratedRevisionHydratedRevision`

```typescript
const value: operations.GetHydratedRevisionHydratedRevision = {
  id: "revision-id-1",
  specVersion: "1.0.0",
  createTime: new Date("2024-06-01T09:39:27.790Z"),
  content: {
    name: "<value>",
    provider: "<value>",
    read: {
      objects: [
        {
          error: "Failed to fetch fields from provider",
          objectName: "<value>",
          displayName: "Clare.Schmeler",
          mapToName: "people",
          mapToDisplayName: "People",
          destination: "<value>",
          schedule: "<value>",
          requiredFields: [
            {
              fieldName: "<value>",
              displayName: "Nicola_Gulgowski",
              mapToName: "account_id",
              mapToDisplayName: "Account ID",
            },
          ],
          optionalFields: [
            {
              fieldName: "<value>",
              displayName: "Marcella_Greenholt40",
              mapToName: "account_id",
              mapToDisplayName: "Account ID",
            },
          ],
          allFields: [
            {
              fieldName: "<value>",
              displayName: "Aylin23",
              mapToName: "account_id",
              mapToDisplayName: "Account ID",
            },
          ],
          allFieldsMetadata: {
            "key": {
              fieldName: "Account ID",
              displayName: "Account ID",
              providerType: "timestamp",
              readOnly: false,
              values: [
                {
                  value: "outbound",
                  displayValue: "Outbound Campaign",
                },
              ],
            },
          },
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
          displayName: "Dayna.Crooks15",
          valueDefaults: {
            allowAnyFields: true,
          },
        },
      ],
    },
  },
};
```

### `operations.GetHydratedRevisionAPIProblem`

```typescript
const value: operations.GetHydratedRevisionAPIProblem = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

