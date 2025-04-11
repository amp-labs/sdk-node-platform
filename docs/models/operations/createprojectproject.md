# CreateProjectProject

The newly created project

## Example Usage

```typescript
import { CreateProjectProject } from "sdk-node-platform/models/operations";

let value: CreateProjectProject = {
  id: "my-project",
  name: "mailmonkey-staging",
  appName: "MailMonkey",
  orgId: "9f7c3e2a-61b8-4f5c-8d1a-eb24f3b05d79",
  createTime: new Date("2024-10-22T15:05:16.239Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The project ID.                                                                               | my-project                                                                                    |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The project name.                                                                             | mailmonkey-staging                                                                            |
| `appName`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the application, which is displayed to end users.                                 | MailMonkey                                                                                    |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The organization ID that this project belongs to.                                             | 9f7c3e2a-61b8-4f5c-8d1a-eb24f3b05d79                                                          |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the project was created.                                                             |                                                                                               |
| `updateTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the project was updated.                                                             |                                                                                               |
| `entitlements`                                                                                | [operations.CreateProjectEntitlements](../../models/operations/createprojectentitlements.md)  | :heavy_minus_sign:                                                                            | The entitlements for the project.                                                             |                                                                                               |