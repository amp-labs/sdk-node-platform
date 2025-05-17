# CreateInstallationInstallationsUpdateEvent

## Example Usage

```typescript
import { CreateInstallationInstallationsUpdateEvent } from "@amp-labs/sdk-node-platform/models/operations";

let value: CreateInstallationInstallationsUpdateEvent = {
  enabled: "always",
  watchFieldsAuto: "all",
  requiredWatchFields: [
    "name",
    "description",
  ],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                                    | [operations.CreateInstallationInstallationsResponse201Enabled](../../models/operations/createinstallationinstallationsresponse201enabled.md) | :heavy_check_mark:                                                                                                                           | Conditions to enable update events.                                                                                                          | always                                                                                                                                       |
| `watchFieldsAuto`                                                                                                                            | [operations.CreateInstallationInstallationsWatchFieldsAuto](../../models/operations/createinstallationinstallationswatchfieldsauto.md)       | :heavy_minus_sign:                                                                                                                           | Whether to watch fields all fields automatically.                                                                                            | all                                                                                                                                          |
| `requiredWatchFields`                                                                                                                        | *string*[]                                                                                                                                   | :heavy_minus_sign:                                                                                                                           | The fields that should be watched.                                                                                                           | [<br/>"name",<br/>"description"<br/>]                                                                                                        |