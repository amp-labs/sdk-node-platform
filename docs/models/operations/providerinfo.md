# ProviderInfo

## Example Usage

```typescript
import { ProviderInfo } from "sdk-node-platform/models/operations";

let value: ProviderInfo = {
  name: "<value>",
  authType: "none",
  baseURL: "https://mammoth-paintwork.info/",
  oauth2Opts: {
    grantType: "authorizationCode",
    authURL: "https://login.salesforce.com/services/oauth2/authorize",
    tokenURL: "https://login.salesforce.com/services/oauth2/token",
    explicitScopesRequired: true,
    explicitWorkspaceRequired: true,
    audience: [
      "https://api.mparticle.com",
    ],
    tokenMetadataFields: {
      workspaceRefField: "account-id",
      consumerRefField: "user-id",
      scopesField: "scopes",
    },
    docsURL: "https://docs.example.com/client-credentials",
    authURLParams: {
      "access_type": "offline",
      "duration": "permanent",
    },
  },
  apiKeyOpts: {
    attachmentType: "header",
    query: {
      name: "api_key",
    },
    header: {
      name: "X-Api-Key",
      valuePrefix: "Bearer ",
    },
    docsURL: "https://docs.example.com/api-key",
  },
  basicOpts: {
    apiKeyAsBasic: true,
    apiKeyAsBasicOpts: {
      fieldUsed: "username",
      keyFormat: "api:%s",
    },
    docsURL: "https://docs.example.com/api-key",
  },
  support: {
    bulkWrite: {
      insert: false,
      update: false,
      upsert: false,
      delete: false,
    },
    proxy: false,
    read: false,
    subscribe: false,
    write: false,
  },
  providerOpts: {
    "key": "<value>",
  },
  displayName: "Zendesk Chat",
  postAuthInfoNeeded: true,
  media: {
    regular: {
      iconURL: "https://example.com/icon.png",
      logoURL: "https://example.com/logo.png",
    },
    darkMode: {
      iconURL: "https://example.com/icon.png",
      logoURL: "https://example.com/logo.png",
    },
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `name`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |                                                                                 |
| `authType`                                                                      | [operations.AuthType](../../models/operations/authtype.md)                      | :heavy_check_mark:                                                              | The type of authentication required by the provider.                            |                                                                                 |
| `baseURL`                                                                       | *string*                                                                        | :heavy_check_mark:                                                              | The base URL for making API requests.                                           |                                                                                 |
| `oauth2Opts`                                                                    | [operations.OAuth2Options](../../models/operations/oauth2options.md)            | :heavy_minus_sign:                                                              | Configuration for OAuth2.0. Must be provided if authType is oauth2.             |                                                                                 |
| `apiKeyOpts`                                                                    | [operations.APIKeyOptions](../../models/operations/apikeyoptions.md)            | :heavy_minus_sign:                                                              | Configuration for API key. Must be provided if authType is apiKey.              |                                                                                 |
| `basicOpts`                                                                     | [operations.BasicAuthOptions](../../models/operations/basicauthoptions.md)      | :heavy_minus_sign:                                                              | Configuration for Basic Auth. Optional.                                         |                                                                                 |
| `support`                                                                       | [operations.Support](../../models/operations/support.md)                        | :heavy_check_mark:                                                              | The supported features for the provider.                                        |                                                                                 |
| `providerOpts`                                                                  | Record<string, *string*>                                                        | :heavy_check_mark:                                                              | Additional provider-specific metadata.                                          |                                                                                 |
| `displayName`                                                                   | *string*                                                                        | :heavy_minus_sign:                                                              | The display name of the provider, if omitted, defaults to provider name.        | Zendesk Chat                                                                    |
| `postAuthInfoNeeded`                                                            | *boolean*                                                                       | :heavy_minus_sign:                                                              | If true, we require additional information after auth to start making requests. | true                                                                            |
| `media`                                                                         | [operations.Media](../../models/operations/media.md)                            | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `labels`                                                                        | Record<string, *string*>                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `subscribeOpts`                                                                 | [operations.SubscribeOptions](../../models/operations/subscribeoptions.md)      | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `modules`                                                                       | Record<string, [operations.ModuleInfo](../../models/operations/moduleinfo.md)>  | :heavy_minus_sign:                                                              | The registry of provider modules.                                               |                                                                                 |