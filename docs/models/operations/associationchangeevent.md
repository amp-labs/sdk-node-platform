# AssociationChangeEvent

## Example Usage

```typescript
import { AssociationChangeEvent } from "@amp-labs/sdk-node-platform/models/operations";

let value: AssociationChangeEvent = {};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `enabled`                                                                                                                        | [operations.CreateIntegrationIntegrationsRequestEnabled](../../models/operations/createintegrationintegrationsrequestenabled.md) | :heavy_minus_sign:                                                                                                               | If always, the integration will subscribe to association change events.                                                          |
| `includeFullRecords`                                                                                                             | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | If true, the integration will include full records in the event payload.                                                         |