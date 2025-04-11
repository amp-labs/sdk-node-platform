# GetProjectRequest

## Example Usage

```typescript
import { GetProjectRequest } from "@amp-labs/sdk-node-platform/models/operations";

let value: GetProjectRequest = {
  projectIdOrName: "my-project",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `projectIdOrName`                         | *string*                                  | :heavy_check_mark:                        | The Ampersand project ID or project name. | my-project                                |
| `includeEntitlements`                     | *boolean*                                 | :heavy_minus_sign:                        | N/A                                       |                                           |