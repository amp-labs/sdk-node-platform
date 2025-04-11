# CreateProjectRequestBody

## Example Usage

```typescript
import { CreateProjectRequestBody } from "@amp-labs/sdk-node-platform/models/operations";

let value: CreateProjectRequestBody = {
  appName: "MailMonkey",
  name: "mailmonkey-staging",
  orgId: "9f7c3e2a-61b8-4f5c-8d1a-eb24f3b05d79",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `appName`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | The app name.                                                                                      | MailMonkey                                                                                         |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | The project name. Must be alphanumerics and hyphens only. Project names will be save in lowercase. | mailmonkey-staging                                                                                 |
| `orgId`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | The organization ID.                                                                               | 9f7c3e2a-61b8-4f5c-8d1a-eb24f3b05d79                                                               |