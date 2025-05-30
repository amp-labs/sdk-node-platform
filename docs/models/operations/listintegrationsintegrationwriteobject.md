# ListIntegrationsIntegrationWriteObject

## Example Usage

```typescript
import { ListIntegrationsIntegrationWriteObject } from "@amp-labs/sdk-node-platform/models/operations";

let value: ListIntegrationsIntegrationWriteObject = {
  objectName: "<value>",
  inheritMapping: true,
  valueDefaults: {
    allowAnyFields: true,
  },
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `objectName`                                                                                                              | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |                                                                                                                           |
| `inheritMapping`                                                                                                          | *boolean*                                                                                                                 | :heavy_minus_sign:                                                                                                        | If true, the write object will inherit the mapping from the read object. If false, the write object will have no mapping. | true                                                                                                                      |
| `valueDefaults`                                                                                                           | [operations.ListIntegrationsValueDefaults](../../models/operations/listintegrationsvaluedefaults.md)                      | :heavy_minus_sign:                                                                                                        | Configuration to set default write values for object fields.                                                              |                                                                                                                           |