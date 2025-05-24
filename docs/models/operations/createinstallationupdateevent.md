# CreateInstallationUpdateEvent

## Example Usage

```typescript
import { CreateInstallationUpdateEvent } from "@amp-labs/sdk-node-platform/models/operations";

let value: CreateInstallationUpdateEvent = {
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
| `enabled`                                                                                                              | [operations.CreateInstallationInstallationsEnabled](../../models/operations/createinstallationinstallationsenabled.md) | :heavy_check_mark:                                                                                                     | Conditions to enable update events.                                                                                    | always                                                                                                                 |
| `watchFieldsAuto`                                                                                                      | [operations.CreateInstallationWatchFieldsAuto](../../models/operations/createinstallationwatchfieldsauto.md)           | :heavy_minus_sign:                                                                                                     | Whether to watch fields all fields automatically.                                                                      | all                                                                                                                    |
| `requiredWatchFields`                                                                                                  | *string*[]                                                                                                             | :heavy_minus_sign:                                                                                                     | The fields that should be watched.                                                                                     | [<br/>"name",<br/>"description"<br/>]                                                                                  |