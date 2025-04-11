# CreateInstallationRequestBody

## Example Usage

```typescript
import { CreateInstallationRequestBody } from "sdk-node-platform/models/operations";

let value: CreateInstallationRequestBody = {
  groupRef: "group-123",
  config: {
    content: {
      provider: "salesforce",
    },
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `groupRef`                                                                                                              | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the user group that has access to this installation.                                                          | group-123                                                                                                               |
| `connectionId`                                                                                                          | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The ID of the SaaS connection tied to this installation. If omitted the default connection for this group will be used. |                                                                                                                         |
| `config`                                                                                                                | [operations.Config](../../models/operations/config.md)                                                                  | :heavy_check_mark:                                                                                                      | The config of the installation.                                                                                         |                                                                                                                         |