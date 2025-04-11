# BatchUpsertIntegrationsDelivery

## Example Usage

```typescript
import { BatchUpsertIntegrationsDelivery } from "@amp-labs/sdk-node-platform/models/operations";

let value: BatchUpsertIntegrationsDelivery = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `mode`                                                                                           | [operations.BatchUpsertIntegrationsMode](../../models/operations/batchupsertintegrationsmode.md) | :heavy_minus_sign:                                                                               | The data delivery mode for this object. If not specified, defaults to automatic.                 |
| `pageSize`                                                                                       | *number*                                                                                         | :heavy_minus_sign:                                                                               | The number of records to receive per data delivery.                                              |