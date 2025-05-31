# GetProviderProviderMetadata

Provider metadata that needs to be given by the user or fetched by the connector post authentication for the connector to work.

## Example Usage

```typescript
import { GetProviderProviderMetadata } from "@amp-labs/sdk-node-platform/models/operations";

let value: GetProviderProviderMetadata = {
  input: [
    {
      name: "<value>",
      docsURL: "https://example.com/how-to-find-subdomain",
    },
  ],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `input`                                                                                                                                      | [operations.GetProviderMetadataItemAsInput](../../models/operations/getprovidermetadataitemasinput.md)[]                                     | :heavy_minus_sign:                                                                                                                           | Metadata provided as manual input                                                                                                            |
| `postAuthentication`                                                                                                                         | [operations.GetProviderMetadataItemFetchedPostAuthentication](../../models/operations/getprovidermetadataitemfetchedpostauthentication.md)[] | :heavy_minus_sign:                                                                                                                           | Metadata fetched by the connector post authentication                                                                                        |