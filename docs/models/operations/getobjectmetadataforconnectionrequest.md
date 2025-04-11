# GetObjectMetadataForConnectionRequest

## Example Usage

```typescript
import { GetObjectMetadataForConnectionRequest } from "sdk-node-platform/models/operations";

let value: GetObjectMetadataForConnectionRequest = {
  projectIdOrName: "my-project",
  provider: "<value>",
  objectName: "<value>",
  groupRef: "group-123",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `projectIdOrName`                             | *string*                                      | :heavy_check_mark:                            | The unique identifier or name of the project. | my-project                                    |
| `provider`                                    | *string*                                      | :heavy_check_mark:                            | The API Provider                              |                                               |
| `objectName`                                  | *string*                                      | :heavy_check_mark:                            | Object name (mapped or unmapped)              |                                               |
| `groupRef`                                    | *string*                                      | :heavy_minus_sign:                            | The groupRef for the connection.              | group-123                                     |