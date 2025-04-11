# UpdateProjectRequest

## Example Usage

```typescript
import { UpdateProjectRequest } from "sdk-node-platform/models/operations";

let value: UpdateProjectRequest = {
  projectIdOrName: "my-project",
  requestBody: {
    updateMask: [
      "appName",
    ],
    project: {
      appName: "MailMonkey",
      name: "mailmonkey-staging",
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `projectIdOrName`                                                                          | *string*                                                                                   | :heavy_check_mark:                                                                         | The Ampersand project ID or project name.                                                  | my-project                                                                                 |
| `requestBody`                                                                              | [operations.UpdateProjectRequestBody](../../models/operations/updateprojectrequestbody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |