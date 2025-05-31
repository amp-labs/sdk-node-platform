# ListInstallationsUpdateEvent

## Example Usage

```typescript
import { ListInstallationsUpdateEvent } from "@amp-labs/sdk-node-platform/models/operations";

let value: ListInstallationsUpdateEvent = {
  enabled: "always",
  watchFieldsAuto: "all",
  requiredWatchFields: [
    "name",
    "description",
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                            | [operations.ListInstallationsInstallationsEnabled](../../models/operations/listinstallationsinstallationsenabled.md) | :heavy_check_mark:                                                                                                   | Conditions to enable update events.                                                                                  | always                                                                                                               |
| `watchFieldsAuto`                                                                                                    | [operations.ListInstallationsWatchFieldsAuto](../../models/operations/listinstallationswatchfieldsauto.md)           | :heavy_minus_sign:                                                                                                   | Whether to watch fields all fields automatically.                                                                    | all                                                                                                                  |
| `requiredWatchFields`                                                                                                | *string*[]                                                                                                           | :heavy_minus_sign:                                                                                                   | The fields that should be watched.                                                                                   | [<br/>"name",<br/>"description"<br/>]                                                                                |