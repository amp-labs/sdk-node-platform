# ListInstallationsConfig

## Example Usage

```typescript
import { ListInstallationsConfig } from "@amp-labs/sdk-node-platform/models/operations";

let value: ListInstallationsConfig = {
  id: "config-123",
  revisionId: "revision-123",
  createTime: new Date("2023-09-03T11:14:18.896Z"),
  createdBy: "builder:builder-123",
  content: {
    provider: "salesforce",
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             | Example                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                    | *string*                                                                                                | :heavy_check_mark:                                                                                      | The config ID.                                                                                          | config-123                                                                                              |
| `revisionId`                                                                                            | *string*                                                                                                | :heavy_check_mark:                                                                                      | The ID of the revision that this config is based on.                                                    | revision-123                                                                                            |
| `createTime`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | The time the config was created.                                                                        |                                                                                                         |
| `createdBy`                                                                                             | *string*                                                                                                | :heavy_check_mark:                                                                                      | The person who created the config, in the format of "consumer:{consumer-id}" or "builder:{builder-id}". | builder:builder-123                                                                                     |
| `content`                                                                                               | [operations.ListInstallationsConfigContent](../../models/operations/listinstallationsconfigcontent.md)  | :heavy_check_mark:                                                                                      | N/A                                                                                                     |                                                                                                         |