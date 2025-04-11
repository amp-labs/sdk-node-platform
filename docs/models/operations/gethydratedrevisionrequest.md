# GetHydratedRevisionRequest

## Example Usage

```typescript
import { GetHydratedRevisionRequest } from "@amp-labs/sdk-node-platform/models/operations";

let value: GetHydratedRevisionRequest = {
  projectIdOrName: "my-project",
  integrationId: "<id>",
  revisionId: "<id>",
  connectionId: "<id>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `projectIdOrName`                         | *string*                                  | :heavy_check_mark:                        | The Ampersand project ID or project name. | my-project                                |
| `integrationId`                           | *string*                                  | :heavy_check_mark:                        | The integration ID.                       |                                           |
| `revisionId`                              | *string*                                  | :heavy_check_mark:                        | The revision ID.                          |                                           |
| `connectionId`                            | *string*                                  | :heavy_check_mark:                        | The connection ID.                        |                                           |