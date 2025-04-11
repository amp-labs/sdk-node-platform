# GetProviderSubscribeOptions

## Example Usage

```typescript
import { GetProviderSubscribeOptions } from "sdk-node-platform/models/operations";

let value: GetProviderSubscribeOptions = {
  subscriptionScope: "installation",
  targetURLScope: "integration",
  registrationTiming: "installation",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `subscriptionScope`                                                                                  | [operations.GetProviderSubscriptionScope](../../models/operations/getprovidersubscriptionscope.md)   | :heavy_check_mark:                                                                                   | The scope of the subscription.                                                                       |
| `targetURLScope`                                                                                     | [operations.GetProviderTargetURLScope](../../models/operations/getprovidertargeturlscope.md)         | :heavy_check_mark:                                                                                   | The scope of the target URL.                                                                         |
| `registrationTiming`                                                                                 | [operations.GetProviderRegistrationTiming](../../models/operations/getproviderregistrationtiming.md) | :heavy_check_mark:                                                                                   | The timing of the registration.                                                                      |