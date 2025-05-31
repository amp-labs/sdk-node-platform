# ListIntegrationsUpdateEvent

## Example Usage

```typescript
import { ListIntegrationsUpdateEvent } from "@amp-labs/sdk-node-platform/models/operations";

let value: ListIntegrationsUpdateEvent = {
  watchFieldsAuto: "all",
  requiredWatchFields: [
    "[\"name\",\"domain\"]",
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                | [operations.ListIntegrationsEnabled](../../models/operations/listintegrationsenabled.md)                 | :heavy_minus_sign:                                                                                       | If always, the integration will subscribe to update events by default.                                   |                                                                                                          |
| `watchFieldsAuto`                                                                                        | [operations.ListIntegrationsWatchFieldsAuto](../../models/operations/listintegrationswatchfieldsauto.md) | :heavy_minus_sign:                                                                                       | If all, the integration will watch all fields for updates.                                               | all                                                                                                      |
| `requiredWatchFields`                                                                                    | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |