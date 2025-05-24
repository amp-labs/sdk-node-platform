# ListInstallationsFieldSetting

## Example Usage

```typescript
import { ListInstallationsFieldSetting } from "@amp-labs/sdk-node-platform/models/operations";

let value: ListInstallationsFieldSetting = {};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `default`                                                                                                              | [operations.ListInstallationsDefaultValueForAField](../../models/operations/listinstallationsdefaultvalueforafield.md) | :heavy_minus_sign:                                                                                                     | Only use one of stringValue, integerValue, booleanValue.                                                               |
| `writeOnCreate`                                                                                                        | [operations.ListInstallationsWriteOnCreate](../../models/operations/listinstallationswriteoncreate.md)                 | :heavy_minus_sign:                                                                                                     | Whether the default value should be applied when creating a record.                                                    |
| `writeOnUpdate`                                                                                                        | [operations.ListInstallationsWriteOnUpdate](../../models/operations/listinstallationswriteonupdate.md)                 | :heavy_minus_sign:                                                                                                     | Whether the default value should be applied when updating a record.                                                    |