# ProviderInfo

## Example Usage

```typescript
import { ProviderInfo } from "@amp-labs/sdk-node-platform/models/operations";

let value: ProviderInfo = {
  name: "<value>",
  authType: "apiKey",
  baseURL: "https://angelic-pharmacopoeia.net/",
  defaultModule: "<value>",
  oauth2Opts: {
    grantType: "authorizationCodePKCE",
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
      otherFields: [
        {
          name: "<value>",
          displayName: "Michaela_Hoppe-Hane",
          path: "owner.siteId",
          capture: "https:\/\/(?<result>[^.]+)\.docusign\.net",
        },
      ],
    },
    docsURL: "https://docs.example.com/client-credentials",
    authURLParams: {
      "access_type": "offline",
      "duration": "permanent",
    },
  },
  apiKeyOpts: {
    attachmentType: "query",
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
  authHealthCheck: {
    url: "https://api.example.com/health-check",
    method: "GET",
    successStatusCodes: [
      200,
      204,
    ],
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
  metadata: {
    input: [
      {
        name: "<value>",
        docsURL: "https://example.com/how-to-find-subdomain",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |
| `authType`                                                                                                                             | [operations.AuthType](../../models/operations/authtype.md)                                                                             | :heavy_check_mark:                                                                                                                     | The type of authentication required by the provider.                                                                                   |                                                                                                                                        |
| `baseURL`                                                                                                                              | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The base URL for making API requests.                                                                                                  |                                                                                                                                        |
| `defaultModule`                                                                                                                        | *any*                                                                                                                                  | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |
| `oauth2Opts`                                                                                                                           | [operations.OAuth2Options](../../models/operations/oauth2options.md)                                                                   | :heavy_minus_sign:                                                                                                                     | Configuration for OAuth2.0. Must be provided if authType is oauth2.                                                                    |                                                                                                                                        |
| `apiKeyOpts`                                                                                                                           | [operations.APIKeyOptions](../../models/operations/apikeyoptions.md)                                                                   | :heavy_minus_sign:                                                                                                                     | Configuration for API key. Must be provided if authType is apiKey.                                                                     |                                                                                                                                        |
| `basicOpts`                                                                                                                            | [operations.BasicAuthOptions](../../models/operations/basicauthoptions.md)                                                             | :heavy_minus_sign:                                                                                                                     | Configuration for Basic Auth. Optional.                                                                                                |                                                                                                                                        |
| `support`                                                                                                                              | [operations.Support](../../models/operations/support.md)                                                                               | :heavy_check_mark:                                                                                                                     | The supported features for the provider.                                                                                               |                                                                                                                                        |
| `providerOpts`                                                                                                                         | Record<string, *string*>                                                                                                               | :heavy_check_mark:                                                                                                                     | Additional provider-specific metadata.                                                                                                 |                                                                                                                                        |
| `authHealthCheck`                                                                                                                      | [operations.AuthHealthCheck](../../models/operations/authhealthcheck.md)                                                               | :heavy_minus_sign:                                                                                                                     | A URL to check the health of a provider's credentials. It's used to see if the credentials are valid and if the provider is reachable. |                                                                                                                                        |
| `displayName`                                                                                                                          | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | The display name of the provider, if omitted, defaults to provider name.                                                               | Zendesk Chat                                                                                                                           |
| `postAuthInfoNeeded`                                                                                                                   | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | If true, we require additional information after auth to start making requests.                                                        | true                                                                                                                                   |
| `media`                                                                                                                                | [operations.Media](../../models/operations/media.md)                                                                                   | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |
| `labels`                                                                                                                               | Record<string, *string*>                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |
| `subscribeOpts`                                                                                                                        | [operations.SubscribeOptions](../../models/operations/subscribeoptions.md)                                                             | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |
| `modules`                                                                                                                              | Record<string, [operations.ModuleInfo](../../models/operations/moduleinfo.md)>                                                         | :heavy_minus_sign:                                                                                                                     | The registry of provider modules.                                                                                                      |                                                                                                                                        |
| `metadata`                                                                                                                             | [operations.ProviderMetadata](../../models/operations/providermetadata.md)                                                             | :heavy_minus_sign:                                                                                                                     | Provider metadata that needs to be given by the user or fetched by the connector post authentication for the connector to work.        |                                                                                                                                        |