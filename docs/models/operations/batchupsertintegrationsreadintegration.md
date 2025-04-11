# BatchUpsertIntegrationsReadIntegration

## Example Usage

```typescript
import { BatchUpsertIntegrationsReadIntegration } from "@amp-labs/sdk-node-platform/models/operations";

let value: BatchUpsertIntegrationsReadIntegration = {
  objects: [
    {
      objectName: "<value>",
      destination: "<value>",
      schedule: "<value>",
      mapToName: "people",
      mapToDisplayName: "People",
      requiredFields: [
        {
          mapToName: "<value>",
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
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `objects`                                                                                                                    | [operations.BatchUpsertIntegrationsIntegrationObject](../../models/operations/batchupsertintegrationsintegrationobject.md)[] | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |