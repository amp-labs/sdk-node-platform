# ListDestinationsResponse


## Supported Types

### `operations.ListDestinationsDestination[]`

```typescript
const value: operations.ListDestinationsDestination[] = [
  {
    id: "<id>",
    name: "leadConvertedWebhook",
    type: "webhook",
    metadata: {
      url: "https://webhooks.mailmonkey.com/salesforce-lead-converted",
      headers: {
        "Authorization": "Bearer 1234",
      },
    },
    createTime: new Date("2023-01-10T16:13:34.430Z"),
  },
];
```

### `operations.ListDestinationsAPIProblem`

```typescript
const value: operations.ListDestinationsAPIProblem = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

