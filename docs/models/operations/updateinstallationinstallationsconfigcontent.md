# UpdateInstallationInstallationsConfigContent

## Example Usage

```typescript
import { UpdateInstallationInstallationsConfigContent } from "@amp-labs/sdk-node-platform/models/operations";

let value: UpdateInstallationInstallationsConfigContent = {
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
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `provider`                                                                                                                             | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The SaaS API that we are integrating with.                                                                                             | salesforce                                                                                                                             |
| `read`                                                                                                                                 | [operations.UpdateInstallationReadConfig](../../models/operations/updateinstallationreadconfig.md)                                     | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |
| `write`                                                                                                                                | [operations.UpdateInstallationWriteConfig](../../models/operations/updateinstallationwriteconfig.md)                                   | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |
| `proxy`                                                                                                                                | [operations.UpdateInstallationInstallationsBaseProxyConfig](../../models/operations/updateinstallationinstallationsbaseproxyconfig.md) | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |
| `subscribe`                                                                                                                            | [operations.UpdateInstallationSubscribeConfig](../../models/operations/updateinstallationsubscribeconfig.md)                           | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |