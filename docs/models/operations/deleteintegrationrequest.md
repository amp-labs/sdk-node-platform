# DeleteIntegrationRequest

## Example Usage

```typescript
import { DeleteIntegrationRequest } from "sdk-node-platform/models/operations";

let value: DeleteIntegrationRequest = {
  projectIdOrName: "my-project",
  integrationId: "123e4567-e89b-12d3-a456-426614174000",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `projectIdOrName`                         | *string*                                  | :heavy_check_mark:                        | The Ampersand project ID or project name. | my-project                                |
| `integrationId`                           | *string*                                  | :heavy_check_mark:                        | The integration ID.                       | 123e4567-e89b-12d3-a456-426614174000      |