# UpdateEvent

## Example Usage

```typescript
import { UpdateEvent } from "@amp-labs/sdk-node-platform/models/operations";

let value: UpdateEvent = {
  watchFieldsAuto: "all",
  requiredWatchFields: [
    "[\"name\",\"domain\"]",
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `enabled`                                                                                  | [operations.CreateIntegrationEnabled](../../models/operations/createintegrationenabled.md) | :heavy_minus_sign:                                                                         | If always, the integration will subscribe to update events by default.                     |                                                                                            |
| `watchFieldsAuto`                                                                          | [operations.WatchFieldsAuto](../../models/operations/watchfieldsauto.md)                   | :heavy_minus_sign:                                                                         | If all, the integration will watch all fields for updates.                                 | all                                                                                        |
| `requiredWatchFields`                                                                      | *string*[]                                                                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |