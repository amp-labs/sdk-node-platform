# GetDestinationRequest

## Example Usage

```typescript
import { GetDestinationRequest } from "@amp-labs/sdk-node-platform/models/operations";

let value: GetDestinationRequest = {
  projectIdOrName: "my-project",
  destination: "leadConvertedWebhook",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `projectIdOrName`                         | *string*                                  | :heavy_check_mark:                        | The Ampersand project ID or project name. | my-project                                |
| `destination`                             | *string*                                  | :heavy_check_mark:                        | The destination name.                     | leadConvertedWebhook                      |