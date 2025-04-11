# DeleteDestinationRequest

## Example Usage

```typescript
import { DeleteDestinationRequest } from "@amp-labs/sdk-node-platform/models/operations";

let value: DeleteDestinationRequest = {
  projectIdOrName: "my-project",
  destination: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `projectIdOrName`                         | *string*                                  | :heavy_check_mark:                        | The Ampersand project ID or project name. | my-project                                |
| `destination`                             | *string*                                  | :heavy_check_mark:                        | The destination ID                        |                                           |