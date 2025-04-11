# OauthUpdateRequest

## Example Usage

```typescript
import { OauthUpdateRequest } from "sdk-node-platform/models/operations";

let value: OauthUpdateRequest = {
  projectIdOrName: "<value>",
  connectionId: "<id>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `projectIdOrName`             | *string*                      | :heavy_check_mark:            | Ampersand Project ID or name. |
| `connectionId`                | *string*                      | :heavy_check_mark:            | ID of connection to update.   |