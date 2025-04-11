# ListInstallationsRequest

## Example Usage

```typescript
import { ListInstallationsRequest } from "@amp-labs/sdk-node-platform/models/operations";

let value: ListInstallationsRequest = {
  projectIdOrName: "my-project",
  integrationId: "<id>",
  groupRef: "group-123",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `projectIdOrName`                                              | *string*                                                       | :heavy_check_mark:                                             | The Ampersand project ID or project name.                      | my-project                                                     |
| `integrationId`                                                | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |                                                                |
| `groupRef`                                                     | *string*                                                       | :heavy_minus_sign:                                             | The ID of the user group that has access to this installation. | group-123                                                      |