# UpdateInstallationSubscribeConfig

## Example Usage

```typescript
import { UpdateInstallationSubscribeConfig } from "@amp-labs/sdk-node-platform/models/operations";

let value: UpdateInstallationSubscribeConfig = {
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
| `objects`                                                                                                                                | Record<string, [operations.UpdateInstallationSubscribeConfigObject](../../models/operations/updateinstallationsubscribeconfigobject.md)> | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |