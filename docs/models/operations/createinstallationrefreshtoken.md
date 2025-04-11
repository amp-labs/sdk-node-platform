# CreateInstallationRefreshToken

The refresh token to use for the connection.

## Example Usage

```typescript
import { CreateInstallationRefreshToken } from "sdk-node-platform/models/operations";

let value: CreateInstallationRefreshToken = {
  token: "<value>",
  issuedAt: new Date("2024-04-22T18:55:28.456076Z"),
  expiresAt: new Date("2024-10-22T18:55:28.456076Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `token`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `issuedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2024-04-22T18:55:28.456076Z                                                                   |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2024-10-22T18:55:28.456076Z                                                                   |