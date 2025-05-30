# APIKeyQueryOptions

Configuration for API key in query parameter. Must be provided if type is in-query.

## Example Usage

```typescript
import { APIKeyQueryOptions } from "@amp-labs/sdk-node-platform/models/operations";

let value: APIKeyQueryOptions = {
  name: "api_key",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `name`                                                      | *string*                                                    | :heavy_check_mark:                                          | The name of the query parameter to be used for the API key. | api_key                                                     |