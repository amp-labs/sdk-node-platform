# GetConnectionAuthScheme

The authentication scheme used for this connection.

## Example Usage

```typescript
import { GetConnectionAuthScheme } from "sdk-node-platform/models/operations";

let value: GetConnectionAuthScheme = "oauth2/authorizationCode";
```

## Values

```typescript
"none" | "apiKey" | "basic" | "oauth2/authorizationCode" | "oauth2/authorizationCodePKCE" | "oauth2/clientCredentials" | "oauth2/password"
```