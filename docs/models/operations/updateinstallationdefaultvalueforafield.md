# UpdateInstallationDefaultValueForAField

Only use one of stringValue, integerValue, booleanValue.

## Example Usage

```typescript
import { UpdateInstallationDefaultValueForAField } from "@amp-labs/sdk-node-platform/models/operations";

let value: UpdateInstallationDefaultValueForAField = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `stringValue`                                 | *string*                                      | :heavy_minus_sign:                            | The default string value to apply to a field  |
| `integerValue`                                | *number*                                      | :heavy_minus_sign:                            | The default integer value to apply to a field |
| `booleanValue`                                | *boolean*                                     | :heavy_minus_sign:                            | The default boolean value to apply to a field |