# SubscribeConfig

## Example Usage

```typescript
import { SubscribeConfig } from "@amp-labs/sdk-node-platform/models/operations";

let value: SubscribeConfig = {
  objects: {
    "key": {
      inheritFieldsAndMappings: true,
      objectName: "account",
      destination: "accountWebhook",
      updateEvent: {
        enabled: "always",
        watchFieldsAuto: "all",
        requiredWatchFields: [
          "name",
          "description",
        ],
      },
      deleteEvent: {
        enabled: "always",
      },
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `objects`                                                                                            | Record<string, [operations.SubscribeConfigObject](../../models/operations/subscribeconfigobject.md)> | :heavy_check_mark:                                                                                   | N/A                                                                                                  |