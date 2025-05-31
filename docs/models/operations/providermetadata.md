# ProviderMetadata

Provider metadata that needs to be given by the user or fetched by the connector post authentication for the connector to work.

## Example Usage

```typescript
import { ProviderMetadata } from "@amp-labs/sdk-node-platform/models/operations";

let value: ProviderMetadata = {
  input: [
    {
      name: "<value>",
      docsURL: "https://example.com/how-to-find-subdomain",
    },
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `input`                                                                                                                | [operations.MetadataItemAsInput](../../models/operations/metadataitemasinput.md)[]                                     | :heavy_minus_sign:                                                                                                     | Metadata provided as manual input                                                                                      |
| `postAuthentication`                                                                                                   | [operations.MetadataItemFetchedPostAuthentication](../../models/operations/metadataitemfetchedpostauthentication.md)[] | :heavy_minus_sign:                                                                                                     | Metadata fetched by the connector post authentication                                                                  |