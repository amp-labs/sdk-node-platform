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
    read: {
      objects: {
        "key": {
          objectName: "account",
          schedule: "*/15 * * * *",
          destination: "accountWebhook",
          selectedFields: {
            "0": true,
            "1": true,
            "2": true,
            "3": true,
            "4": true,
            "5": true,
            "6": true,
            "7": true,
            "8": true,
            "9": true,
            "10": true,
            "11": true,
            "12": true,
            "13": true,
            "14": true,
            "15": true,
            "16": true,
            "17": true,
            "18": true,
            "19": true,
            "20": true,
            "21": true,
            "22": true,
            "23": true,
            "24": true,
            "25": true,
          },
          selectedValueMappings: {
            "stage": {
              "open": "scheduled",
              "closedWon": "won",
              "closedLost": "lost",
            },
          },
          selectedFieldMappings: {
            "0": "{",
            "1": " ",
            "2": "p",
            "3": "h",
            "4": "o",
            "5": "n",
            "6": "e",
            "7": "N",
            "8": "u",
            "9": "m",
            "10": "b",
            "11": "e",
            "12": "r",
            "13": ":",
            "14": " ",
            "15": "p",
            "16": "h",
            "17": "o",
            "18": "n",
            "19": "e",
            "20": ",",
            "21": " ",
            "22": "f",
            "23": "a",
            "24": "x",
            "25": "N",
            "26": "u",
            "27": "m",
            "28": "b",
            "29": "e",
            "30": "r",
            "31": ":",
            "32": " ",
            "33": "f",
            "34": "a",
            "35": "x",
            "36": " ",
            "37": "}",
          },
          backfill: {
            defaultPeriod: {
              days: 30,
              fullHistory: false,
            },
          },
        },
      },
    },
    write: {
      objects: {
        "key": {
          objectName: "account",
        },
      },
    },
    subscribe: {
      objects: {
        "key": {
          inheritFieldsAndMappings: true,
          objectName: "account",
          destination: "accountWebhook",
          updateEvent: {
            enabled: "always",
            watchFieldsAuto: "all",
            requiredWatchFields: [
              "name",
              "description",
            ],
          },
          deleteEvent: {
            enabled: "always",
          },
        },
      },
    },
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