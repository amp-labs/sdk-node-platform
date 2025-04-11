# GetProviderMediaTypeDarkMode

Media to be used in dark mode.

## Example Usage

```typescript
import { GetProviderMediaTypeDarkMode } from "sdk-node-platform/models/operations";

let value: GetProviderMediaTypeDarkMode = {
  iconURL: "https://example.com/icon.png",
  logoURL: "https://example.com/logo.png",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `iconURL`                                                         | *string*                                                          | :heavy_minus_sign:                                                | URL to the icon for the provider that is to be used in dark mode. | https://example.com/icon.png                                      |
| `logoURL`                                                         | *string*                                                          | :heavy_minus_sign:                                                | URL to the logo for the provider that is to be used in dark mode. | https://example.com/logo.png                                      |