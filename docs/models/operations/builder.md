# Builder

## Example Usage

```typescript
import { Builder } from "@amp-labs/sdk-node-platform/models/operations";

let value: Builder = {
  id: "builder-id-123",
  idpProvider: "clerk",
  idpRef: "<value>",
  createTime: new Date("2024-02-08T08:21:34.676Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The builder ID.                                                                               | builder-id-123                                                                                |
| `idpProvider`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The identity provider                                                                         | clerk                                                                                         |
| `idpRef`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | ID used by the identity provider                                                              |                                                                                               |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time that the builder joined Ampersand.                                                   |                                                                                               |
| `firstName`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `lastName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `fullName`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `primaryEmail`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |