# DeleteInstallationRequest

## Example Usage

```typescript
import { DeleteInstallationRequest } from "sdk-node-platform/models/operations";

let value: DeleteInstallationRequest = {
  projectIdOrName: "my-project",
  integrationId: "<id>",
  installationId: "<id>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `projectIdOrName`                         | *string*                                  | :heavy_check_mark:                        | The Ampersand project ID or project name. | my-project                                |
| `integrationId`                           | *string*                                  | :heavy_check_mark:                        | The integration ID.                       |                                           |
| `installationId`                          | *string*                                  | :heavy_check_mark:                        | The Ampersand installation ID.            |                                           |