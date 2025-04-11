# FieldSetting

## Example Usage

```typescript
import { FieldSetting } from "sdk-node-platform/models/operations";

let value: FieldSetting = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `default`                                                                            | [operations.DefaultValueForAField](../../models/operations/defaultvalueforafield.md) | :heavy_minus_sign:                                                                   | Only use one of stringValue, integerValue, booleanValue.                             |
| `writeOnCreate`                                                                      | [operations.WriteOnCreate](../../models/operations/writeoncreate.md)                 | :heavy_minus_sign:                                                                   | Whether the default value should be applied when creating a record.                  |
| `writeOnUpdate`                                                                      | [operations.WriteOnUpdate](../../models/operations/writeonupdate.md)                 | :heavy_minus_sign:                                                                   | Whether the default value should be applied when updating a record.                  |