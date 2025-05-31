# CreateInstallationSubscribeConfig

## Example Usage

```typescript
import { CreateInstallationSubscribeConfig } from "@amp-labs/sdk-node-platform/models/operations";

let value: CreateInstallationSubscribeConfig = {
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

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `objects`                                                                                                                                | Record<string, [operations.CreateInstallationSubscribeConfigObject](../../models/operations/createinstallationsubscribeconfigobject.md)> | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |