# GetProviderAPIKeyAsBasicOptions

when this object is present, it means that this provider uses Basic Auth to actually collect an API key

## Example Usage

```typescript
import { GetProviderAPIKeyAsBasicOptions } from "@amp-labs/sdk-node-platform/models/operations";

let value: GetProviderAPIKeyAsBasicOptions = {
  fieldUsed: "username",
  keyFormat: "api:%s",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `fieldUsed`                                                                                                  | [operations.GetProviderFieldUsed](../../models/operations/getproviderfieldused.md)                           | :heavy_minus_sign:                                                                                           | whether the API key should be used as the username or password.                                              | username                                                                                                     |
| `keyFormat`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | How to transform the API key in to a basic auth user:pass string. The %s is replaced with the API key value. | api:%s                                                                                                       |