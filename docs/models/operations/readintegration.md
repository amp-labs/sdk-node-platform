# ReadIntegration

## Example Usage

```typescript
import { ReadIntegration } from "sdk-node-platform/models/operations";

let value: ReadIntegration = {
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `objects`                                                                      | [operations.IntegrationObject](../../models/operations/integrationobject.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |