# BatchUpsertIntegrationsAssociationChangeEvent

## Example Usage

```typescript
import { BatchUpsertIntegrationsAssociationChangeEvent } from "sdk-node-platform/models/operations";

let value: BatchUpsertIntegrationsAssociationChangeEvent = {};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                                            | [operations.BatchUpsertIntegrationsIntegrationsResponse200Enabled](../../models/operations/batchupsertintegrationsintegrationsresponse200enabled.md) | :heavy_minus_sign:                                                                                                                                   | If always, the integration will subscribe to association change events.                                                                              |
| `includeFullRecords`                                                                                                                                 | *boolean*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                   | If true, the integration will include full records in the event payload.                                                                             |