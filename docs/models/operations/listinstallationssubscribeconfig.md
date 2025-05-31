# ListInstallationsSubscribeConfig

## Example Usage

```typescript
import { ListInstallationsSubscribeConfig } from "@amp-labs/sdk-node-platform/models/operations";

let value: ListInstallationsSubscribeConfig = {
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

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `objects`                                                                                                                              | Record<string, [operations.ListInstallationsSubscribeConfigObject](../../models/operations/listinstallationssubscribeconfigobject.md)> | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |