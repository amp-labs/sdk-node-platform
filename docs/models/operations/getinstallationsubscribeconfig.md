# GetInstallationSubscribeConfig

## Example Usage

```typescript
import { GetInstallationSubscribeConfig } from "@amp-labs/sdk-node-platform/models/operations";

let value: GetInstallationSubscribeConfig = {
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

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `objects`                                                                                                                          | Record<string, [operations.GetInstallationSubscribeConfigObject](../../models/operations/getinstallationsubscribeconfigobject.md)> | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |