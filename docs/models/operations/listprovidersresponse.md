# ListProvidersResponse


## Supported Types

### `{ [k: string]: operations.ProviderInfo }`

```typescript
const value: { [k: string]: operations.ProviderInfo } = {
  "key": {
    name: "<value>",
    authType: "oauth2",
    baseURL: "https://every-sauerkraut.com",
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
            displayName: "Luella13",
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
  },
};
```

### `operations.ListProvidersAPIProblem`

```typescript
const value: operations.ListProvidersAPIProblem = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

