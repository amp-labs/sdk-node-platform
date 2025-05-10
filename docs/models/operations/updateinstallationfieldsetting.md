# UpdateInstallationFieldSetting

## Example Usage

```typescript
import { UpdateInstallationFieldSetting } from "@amp-labs/sdk-node-platform/models/operations";

let value: UpdateInstallationFieldSetting = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `default`                                                                                                                | [operations.UpdateInstallationDefaultValueForAField](../../models/operations/updateinstallationdefaultvalueforafield.md) | :heavy_minus_sign:                                                                                                       | Only use one of stringValue, integerValue, booleanValue.                                                                 |
| `writeOnCreate`                                                                                                          | [operations.UpdateInstallationWriteOnCreate](../../models/operations/updateinstallationwriteoncreate.md)                 | :heavy_minus_sign:                                                                                                       | Whether the default value should be applied when creating a record.                                                      |
| `writeOnUpdate`                                                                                                          | [operations.UpdateInstallationWriteOnUpdate](../../models/operations/updateinstallationwriteonupdate.md)                 | :heavy_minus_sign:                                                                                                       | Whether the default value should be applied when updating a record.                                                      |