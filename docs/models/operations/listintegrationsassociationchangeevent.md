# ListIntegrationsAssociationChangeEvent

## Example Usage

```typescript
import { ListIntegrationsAssociationChangeEvent } from "sdk-node-platform/models/operations";

let value: ListIntegrationsAssociationChangeEvent = {};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                        | [operations.ListIntegrationsIntegrationsResponseEnabled](../../models/operations/listintegrationsintegrationsresponseenabled.md) | :heavy_minus_sign:                                                                                                               | If always, the integration will subscribe to association change events.                                                          |
| `includeFullRecords`                                                                                                             | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | If true, the integration will include full records in the event payload.                                                         |