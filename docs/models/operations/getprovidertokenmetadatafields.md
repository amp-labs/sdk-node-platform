# GetProviderTokenMetadataFields

Fields to be used to extract token metadata from the token response.

## Example Usage

```typescript
import { GetProviderTokenMetadataFields } from "@amp-labs/sdk-node-platform/models/operations";

let value: GetProviderTokenMetadataFields = {
  workspaceRefField: "account-id",
  consumerRefField: "user-id",
  scopesField: "scopes",
  otherFields: [
    {
      name: "<value>",
      displayName: "Gabriella_Krajcik",
      path: "owner.siteId",
      capture: "https:\/\/(?<result>[^.]+)\.docusign\.net",
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `workspaceRefField`                                                                      | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | account-id                                                                               |
| `consumerRefField`                                                                       | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | user-id                                                                                  |
| `scopesField`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | scopes                                                                                   |
| `otherFields`                                                                            | [operations.GetProviderOtherFields](../../models/operations/getproviderotherfields.md)[] | :heavy_minus_sign:                                                                       | Additional fields to extract and transform from the token response                       |                                                                                          |