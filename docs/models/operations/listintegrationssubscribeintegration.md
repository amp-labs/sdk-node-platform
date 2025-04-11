# ListIntegrationsSubscribeIntegration

## Example Usage

```typescript
import { ListIntegrationsSubscribeIntegration } from "@amp-labs/sdk-node-platform/models/operations";

let value: ListIntegrationsSubscribeIntegration = {
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
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `objects`                                                                                                                        | [operations.ListIntegrationsIntegrationSubscribeObject](../../models/operations/listintegrationsintegrationsubscribeobject.md)[] | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |