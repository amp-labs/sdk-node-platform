# GetInstallationUpdateEvent

## Example Usage

```typescript
import { GetInstallationUpdateEvent } from "@amp-labs/sdk-node-platform/models/operations";

let value: GetInstallationUpdateEvent = {
  enabled: "always",
  watchFieldsAuto: "all",
  requiredWatchFields: [
    "name",
    "description",
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                        | [operations.GetInstallationInstallationsEnabled](../../models/operations/getinstallationinstallationsenabled.md) | :heavy_check_mark:                                                                                               | Conditions to enable update events.                                                                              | always                                                                                                           |
| `watchFieldsAuto`                                                                                                | [operations.GetInstallationWatchFieldsAuto](../../models/operations/getinstallationwatchfieldsauto.md)           | :heavy_minus_sign:                                                                                               | Whether to watch fields all fields automatically.                                                                | all                                                                                                              |
| `requiredWatchFields`                                                                                            | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | The fields that should be watched.                                                                               | [<br/>"name",<br/>"description"<br/>]                                                                            |