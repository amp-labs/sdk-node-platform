# CreateInstallationOAuth2AuthorizationCodeToken

## Example Usage

```typescript
import { CreateInstallationOAuth2AuthorizationCodeToken } from "sdk-node-platform/models/operations";

let value: CreateInstallationOAuth2AuthorizationCodeToken = {
  accessToken: {
    token: "<value>",
    issuedAt: new Date("2024-04-22T18:55:28.456076Z"),
    expiresAt: new Date("2024-10-22T18:55:28.456076Z"),
  },
  refreshToken: {
    token: "<value>",
    issuedAt: new Date("2024-04-22T18:55:28.456076Z"),
    expiresAt: new Date("2024-10-22T18:55:28.456076Z"),
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `accessToken`                                                                                          | [operations.CreateInstallationAccessToken](../../models/operations/createinstallationaccesstoken.md)   | :heavy_minus_sign:                                                                                     | The access token for the connection.                                                                   |
| `refreshToken`                                                                                         | [operations.CreateInstallationRefreshToken](../../models/operations/createinstallationrefreshtoken.md) | :heavy_minus_sign:                                                                                     | The refresh token to use for the connection.                                                           |
| `scopes`                                                                                               | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | The scopes for the tokens.                                                                             |