# Refresh

Whether to refresh the access token. If value is `ifExpired`, the access token will be refreshed only if it has expired. If value is `force`, the access token will be refreshed regardless of its expiration.

## Example Usage

```typescript
import { Refresh } from "sdk-node-platform/models/operations";

let value: Refresh = "force";
```

## Values

```typescript
"force" | "ifExpired"
```