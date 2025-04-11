# GetObjectMetadataForInstallationRequest

## Example Usage

```typescript
import { GetObjectMetadataForInstallationRequest } from "sdk-node-platform/models/operations";

let value: GetObjectMetadataForInstallationRequest = {
  projectIdOrName: "my-project",
  integrationId: "<id>",
  objectName: "<value>",
  groupRef: "group-123",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `projectIdOrName`                             | *string*                                      | :heavy_check_mark:                            | The unique identifier or name of the project. | my-project                                    |
| `integrationId`                               | *string*                                      | :heavy_check_mark:                            | The integration ID.                           |                                               |
| `objectName`                                  | *string*                                      | :heavy_check_mark:                            | Object name (mapped or unmapped)              |                                               |
| `groupRef`                                    | *string*                                      | :heavy_minus_sign:                            | The groupRef for the installation             | group-123                                     |