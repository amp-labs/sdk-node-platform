# WriteConfig

## Example Usage

```typescript
import { WriteConfig } from "@amp-labs/sdk-node-platform/models/operations";

let value: WriteConfig = {
  objects: {
    "key": {
      objectName: "account",
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `objects`                                                                                    | Record<string, [operations.WriteConfigObject](../../models/operations/writeconfigobject.md)> | :heavy_minus_sign:                                                                           | N/A                                                                                          |