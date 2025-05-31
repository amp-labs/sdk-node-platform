# BatchUpsertIntegrationsUpdateEvent

## Example Usage

```typescript
import { BatchUpsertIntegrationsUpdateEvent } from "@amp-labs/sdk-node-platform/models/operations";

let value: BatchUpsertIntegrationsUpdateEvent = {
  watchFieldsAuto: "all",
  requiredWatchFields: [
    "[\"name\",\"domain\"]",
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `enabled`                                                                                                                      | [operations.BatchUpsertIntegrationsIntegrationsEnabled](../../models/operations/batchupsertintegrationsintegrationsenabled.md) | :heavy_minus_sign:                                                                                                             | If always, the integration will subscribe to update events by default.                                                         |                                                                                                                                |
| `watchFieldsAuto`                                                                                                              | [operations.BatchUpsertIntegrationsWatchFieldsAuto](../../models/operations/batchupsertintegrationswatchfieldsauto.md)         | :heavy_minus_sign:                                                                                                             | If all, the integration will watch all fields for updates.                                                                     | all                                                                                                                            |
| `requiredWatchFields`                                                                                                          | *string*[]                                                                                                                     | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |                                                                                                                                |