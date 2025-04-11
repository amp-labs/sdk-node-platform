# IntegrationSubscribeObject

## Example Usage

```typescript
import { IntegrationSubscribeObject } from "@amp-labs/sdk-node-platform/models/operations";

let value: IntegrationSubscribeObject = {
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
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `objectName`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `destination`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `inheritFieldsAndMapping`                                                              | *boolean*                                                                              | :heavy_minus_sign:                                                                     | If true, the integration will inherit the fields and mapping from the read object.     | true                                                                                   |
| `createEvent`                                                                          | [operations.CreateEvent](../../models/operations/createevent.md)                       | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `updateEvent`                                                                          | [operations.UpdateEvent](../../models/operations/updateevent.md)                       | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `deleteEvent`                                                                          | [operations.DeleteEvent](../../models/operations/deleteevent.md)                       | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `associationChangeEvent`                                                               | [operations.AssociationChangeEvent](../../models/operations/associationchangeevent.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `otherEvents`                                                                          | *string*[]                                                                             | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |