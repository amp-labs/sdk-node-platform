# GetInstallationFieldSetting

## Example Usage

```typescript
import { GetInstallationFieldSetting } from "@amp-labs/sdk-node-platform/models/operations";

let value: GetInstallationFieldSetting = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `default`                                                                                                          | [operations.GetInstallationDefaultValueForAField](../../models/operations/getinstallationdefaultvalueforafield.md) | :heavy_minus_sign:                                                                                                 | Only use one of stringValue, integerValue, booleanValue.                                                           |
| `writeOnCreate`                                                                                                    | [operations.GetInstallationWriteOnCreate](../../models/operations/getinstallationwriteoncreate.md)                 | :heavy_minus_sign:                                                                                                 | Whether the default value should be applied when creating a record.                                                |
| `writeOnUpdate`                                                                                                    | [operations.GetInstallationWriteOnUpdate](../../models/operations/getinstallationwriteonupdate.md)                 | :heavy_minus_sign:                                                                                                 | Whether the default value should be applied when updating a record.                                                |