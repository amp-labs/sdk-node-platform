# Delivery

## Example Usage

```typescript
import { Delivery } from "sdk-node-platform/models/operations";

let value: Delivery = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `mode`                                                                           | [operations.Mode](../../models/operations/mode.md)                               | :heavy_minus_sign:                                                               | The data delivery mode for this object. If not specified, defaults to automatic. |
| `pageSize`                                                                       | *number*                                                                         | :heavy_minus_sign:                                                               | The number of records to receive per data delivery.                              |