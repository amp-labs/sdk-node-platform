# SubscribeOptions

## Example Usage

```typescript
import { SubscribeOptions } from "sdk-node-platform/models/operations";

let value: SubscribeOptions = {
  subscriptionScope: "installation",
  targetURLScope: "integration",
  registrationTiming: "installation",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `subscriptionScope`                                                            | [operations.SubscriptionScope](../../models/operations/subscriptionscope.md)   | :heavy_check_mark:                                                             | The scope of the subscription.                                                 |
| `targetURLScope`                                                               | [operations.TargetURLScope](../../models/operations/targeturlscope.md)         | :heavy_check_mark:                                                             | The scope of the target URL.                                                   |
| `registrationTiming`                                                           | [operations.RegistrationTiming](../../models/operations/registrationtiming.md) | :heavy_check_mark:                                                             | The timing of the registration.                                                |