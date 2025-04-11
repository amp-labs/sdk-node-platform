# DeleteProviderAppRequest

## Example Usage

```typescript
import { DeleteProviderAppRequest } from "sdk-node-platform/models/operations";

let value: DeleteProviderAppRequest = {
  projectIdOrName: "my-project",
  providerAppId: "32356abe-d2fd-49c7-9030-abdcbc6456d4",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `projectIdOrName`                                               | *string*                                                        | :heavy_check_mark:                                              | The Ampersand project ID or project name.                       | my-project                                                      |
| `providerAppId`                                                 | *string*                                                        | :heavy_check_mark:                                              | ID of the provider app, returned by the CreateProviderApp call. | 32356abe-d2fd-49c7-9030-abdcbc6456d4                            |