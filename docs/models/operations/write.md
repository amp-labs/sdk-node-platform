# Write

## Example Usage

```typescript
import { Write } from "sdk-node-platform/models/operations";

let value: Write = {
  objects: [
    {
      objectName: "<value>",
      displayName: "Simeon91",
      valueDefaults: {
        allowAnyFields: true,
      },
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `objects`                                                  | [operations.Objects](../../models/operations/objects.md)[] | :heavy_minus_sign:                                         | N/A                                                        |