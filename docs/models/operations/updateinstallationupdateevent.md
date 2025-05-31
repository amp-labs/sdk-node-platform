# UpdateInstallationUpdateEvent

## Example Usage

```typescript
import { UpdateInstallationUpdateEvent } from "@amp-labs/sdk-node-platform/models/operations";

let value: UpdateInstallationUpdateEvent = {
  enabled: "always",
  watchFieldsAuto: "all",
  requiredWatchFields: [
    "name",
    "description",
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                              | [operations.UpdateInstallationInstallationsEnabled](../../models/operations/updateinstallationinstallationsenabled.md) | :heavy_check_mark:                                                                                                     | Conditions to enable update events.                                                                                    | always                                                                                                                 |
| `watchFieldsAuto`                                                                                                      | [operations.UpdateInstallationWatchFieldsAuto](../../models/operations/updateinstallationwatchfieldsauto.md)           | :heavy_minus_sign:                                                                                                     | Whether to watch fields all fields automatically.                                                                      | all                                                                                                                    |
| `requiredWatchFields`                                                                                                  | *string*[]                                                                                                             | :heavy_minus_sign:                                                                                                     | The fields that should be watched.                                                                                     | [<br/>"name",<br/>"description"<br/>]                                                                                  |