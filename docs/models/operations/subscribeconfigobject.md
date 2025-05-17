# SubscribeConfigObject

## Example Usage

```typescript
import { SubscribeConfigObject } from "@amp-labs/sdk-node-platform/models/operations";

let value: SubscribeConfigObject = {
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
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `inheritFieldsAndMappings`                                                                           | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether to inherit fields and mappings from the read config.                                         | true                                                                                                 |
| `objectName`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | The name of the object to subscribe to.                                                              | account                                                                                              |
| `destination`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The name of the destination that the result should be sent to.                                       | accountWebhook                                                                                       |
| `createEvent`                                                                                        | [operations.CreateInstallationCreateEvent](../../models/operations/createinstallationcreateevent.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `updateEvent`                                                                                        | [operations.CreateInstallationUpdateEvent](../../models/operations/createinstallationupdateevent.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `deleteEvent`                                                                                        | [operations.CreateInstallationDeleteEvent](../../models/operations/createinstallationdeleteevent.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |