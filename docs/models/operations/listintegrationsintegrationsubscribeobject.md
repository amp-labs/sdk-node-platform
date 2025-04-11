# ListIntegrationsIntegrationSubscribeObject

## Example Usage

```typescript
import { ListIntegrationsIntegrationSubscribeObject } from "@amp-labs/sdk-node-platform/models/operations";

let value: ListIntegrationsIntegrationSubscribeObject = {
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `objectName`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `destination`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `inheritFieldsAndMapping`                                                                                              | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | If true, the integration will inherit the fields and mapping from the read object.                                     | true                                                                                                                   |
| `createEvent`                                                                                                          | [operations.ListIntegrationsCreateEvent](../../models/operations/listintegrationscreateevent.md)                       | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `updateEvent`                                                                                                          | [operations.ListIntegrationsUpdateEvent](../../models/operations/listintegrationsupdateevent.md)                       | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `deleteEvent`                                                                                                          | [operations.ListIntegrationsDeleteEvent](../../models/operations/listintegrationsdeleteevent.md)                       | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `associationChangeEvent`                                                                                               | [operations.ListIntegrationsAssociationChangeEvent](../../models/operations/listintegrationsassociationchangeevent.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `otherEvents`                                                                                                          | *string*[]                                                                                                             | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |