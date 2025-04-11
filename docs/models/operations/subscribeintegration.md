# SubscribeIntegration

## Example Usage

```typescript
import { SubscribeIntegration } from "sdk-node-platform/models/operations";

let value: SubscribeIntegration = {
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

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `objects`                                                                                        | [operations.IntegrationSubscribeObject](../../models/operations/integrationsubscribeobject.md)[] | :heavy_minus_sign:                                                                               | N/A                                                                                              |