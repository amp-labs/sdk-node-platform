# ListDestinationsMetadata

## Example Usage

```typescript
import { ListDestinationsMetadata } from "@amp-labs/sdk-node-platform/models/operations";

let value: ListDestinationsMetadata = {
  url: "https://webhooks.mailmonkey.com/salesforce-lead-converted",
  headers: {
    "Authorization": "Bearer 1234",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `url`                                                            | *string*                                                         | :heavy_minus_sign:                                               | Webhook URL                                                      | https://webhooks.mailmonkey.com/salesforce-lead-converted        |
| `headers`                                                        | Record<string, *string*>                                         | :heavy_minus_sign:                                               | Additional headers to add when Ampersand sends a webhook message | {<br/>"Authorization": "Bearer 1234"<br/>}                       |