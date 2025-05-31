# AuthHealthCheck

A URL to check the health of a provider's credentials. It's used to see if the credentials are valid and if the provider is reachable.

## Example Usage

```typescript
import { AuthHealthCheck } from "@amp-labs/sdk-node-platform/models/operations";

let value: AuthHealthCheck = {
  url: "https://api.example.com/health-check",
  method: "GET",
  successStatusCodes: [
    200,
    204,
  ],
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      | Example                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                                                                            | *string*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                               | a no-op URL to check the health of the credentials. The URL MUST not mutate any state. If the provider doesn't have such an endpoint, then don't provide credentialsHealthCheck. | https://api.example.com/health-check                                                                                                                                             |
| `method`                                                                                                                                                                         | *string*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                               | The HTTP method to use for the health check. If not set, defaults to GET.                                                                                                        | GET                                                                                                                                                                              |
| `successStatusCodes`                                                                                                                                                             | *number*[]                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                               | The HTTP status codes that indicate a successful health check. If not set, defaults to 200 and 204.                                                                              | [<br/>200,<br/>204<br/>]                                                                                                                                                         |