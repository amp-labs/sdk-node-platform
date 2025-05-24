# GetProviderProviderInfo

ProviderInfo

## Example Usage

```typescript
import { GetProviderProviderInfo } from "@amp-labs/sdk-node-platform/models/operations";

let value: GetProviderProviderInfo = {
  name: "<value>",
  authType: "oauth2",
  baseURL: "https://sardonic-season.biz",
  defaultModule: "<value>",
  oauth2Opts: {
    grantType: "password",
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
          displayName: "Tremayne_Emard61",
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
| `authType`                                                                                                                             | [operations.GetProviderAuthType](../../models/operations/getproviderauthtype.md)                                                       | :heavy_check_mark:                                                                                                                     | The type of authentication required by the provider.                                                                                   |                                                                                                                                        |
| `baseURL`                                                                                                                              | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The base URL for making API requests.                                                                                                  |                                                                                                                                        |
| `defaultModule`                                                                                                                        | *any*                                                                                                                                  | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |
| `oauth2Opts`                                                                                                                           | [operations.GetProviderOAuth2Options](../../models/operations/getprovideroauth2options.md)                                             | :heavy_minus_sign:                                                                                                                     | Configuration for OAuth2.0. Must be provided if authType is oauth2.                                                                    |                                                                                                                                        |
| `apiKeyOpts`                                                                                                                           | [operations.GetProviderAPIKeyOptions](../../models/operations/getproviderapikeyoptions.md)                                             | :heavy_minus_sign:                                                                                                                     | Configuration for API key. Must be provided if authType is apiKey.                                                                     |                                                                                                                                        |
| `basicOpts`                                                                                                                            | [operations.GetProviderBasicAuthOptions](../../models/operations/getproviderbasicauthoptions.md)                                       | :heavy_minus_sign:                                                                                                                     | Configuration for Basic Auth. Optional.                                                                                                |                                                                                                                                        |
| `support`                                                                                                                              | [operations.GetProviderSupport](../../models/operations/getprovidersupport.md)                                                         | :heavy_check_mark:                                                                                                                     | The supported features for the provider.                                                                                               |                                                                                                                                        |
| `providerOpts`                                                                                                                         | Record<string, *string*>                                                                                                               | :heavy_check_mark:                                                                                                                     | Additional provider-specific metadata.                                                                                                 |                                                                                                                                        |
| `authHealthCheck`                                                                                                                      | [operations.GetProviderAuthHealthCheck](../../models/operations/getproviderauthhealthcheck.md)                                         | :heavy_minus_sign:                                                                                                                     | A URL to check the health of a provider's credentials. It's used to see if the credentials are valid and if the provider is reachable. |                                                                                                                                        |
| `displayName`                                                                                                                          | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | The display name of the provider, if omitted, defaults to provider name.                                                               | Zendesk Chat                                                                                                                           |
| `postAuthInfoNeeded`                                                                                                                   | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | If true, we require additional information after auth to start making requests.                                                        | true                                                                                                                                   |
| `media`                                                                                                                                | [operations.GetProviderMedia](../../models/operations/getprovidermedia.md)                                                             | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |
| `labels`                                                                                                                               | Record<string, *string*>                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |
| `subscribeOpts`                                                                                                                        | [operations.GetProviderSubscribeOptions](../../models/operations/getprovidersubscribeoptions.md)                                       | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |
| `modules`                                                                                                                              | Record<string, [operations.GetProviderModuleInfo](../../models/operations/getprovidermoduleinfo.md)>                                   | :heavy_minus_sign:                                                                                                                     | The registry of provider modules.                                                                                                      |                                                                                                                                        |
| `metadata`                                                                                                                             | [operations.GetProviderProviderMetadata](../../models/operations/getproviderprovidermetadata.md)                                       | :heavy_minus_sign:                                                                                                                     | Provider metadata that needs to be given by the user or fetched by the connector post authentication for the connector to work.        |                                                                                                                                        |