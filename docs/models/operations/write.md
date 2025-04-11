# Write

## Example Usage

```typescript
import { Write } from "@amp-labs/sdk-node-platform/models/operations";

let value: Write = {
  objects: [
    {
      objectName: "<value>",
      displayName: "Jerrell.Johns",
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