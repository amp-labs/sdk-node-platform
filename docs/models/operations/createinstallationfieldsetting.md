# CreateInstallationFieldSetting

## Example Usage

```typescript
import { CreateInstallationFieldSetting } from "@amp-labs/sdk-node-platform/models/operations";

let value: CreateInstallationFieldSetting = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `default`                                                                                                                | [operations.CreateInstallationDefaultValueForAField](../../models/operations/createinstallationdefaultvalueforafield.md) | :heavy_minus_sign:                                                                                                       | Only use one of stringValue, integerValue, booleanValue.                                                                 |
| `writeOnCreate`                                                                                                          | [operations.CreateInstallationWriteOnCreate](../../models/operations/createinstallationwriteoncreate.md)                 | :heavy_minus_sign:                                                                                                       | Whether the default value should be applied when creating a record.                                                      |
| `writeOnUpdate`                                                                                                          | [operations.CreateInstallationWriteOnUpdate](../../models/operations/createinstallationwriteonupdate.md)                 | :heavy_minus_sign:                                                                                                       | Whether the default value should be applied when updating a record.                                                      |