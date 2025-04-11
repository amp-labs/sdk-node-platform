# UpdateConnectionOAuth2AuthorizationCode

## Example Usage

```typescript
import { UpdateConnectionOAuth2AuthorizationCode } from "sdk-node-platform/models/operations";

let value: UpdateConnectionOAuth2AuthorizationCode = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `accessToken`                                                                                      | [operations.UpdateConnectionAccessToken](../../models/operations/updateconnectionaccesstoken.md)   | :heavy_minus_sign:                                                                                 | The access token for the connection.                                                               |
| `refreshToken`                                                                                     | [operations.UpdateConnectionRefreshToken](../../models/operations/updateconnectionrefreshtoken.md) | :heavy_minus_sign:                                                                                 | The refresh token to use for the connection.                                                       |
| `scopes`                                                                                           | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | The scopes for the tokens.                                                                         |