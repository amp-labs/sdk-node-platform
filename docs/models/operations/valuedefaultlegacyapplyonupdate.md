# ValueDefaultLegacyApplyOnUpdate

Whether the default value should be applied when updating a record.
If set to `always`, the default value will be applied when updating a record.
If set to `never`, the default value will not be applied when updating a record,
only when creating a record.
If unspecified, then `always` is assumed.


## Example Usage

```typescript
import { ValueDefaultLegacyApplyOnUpdate } from "sdk-node-platform/models/operations";

let value: ValueDefaultLegacyApplyOnUpdate = "always";
```

## Values

```typescript
"always" | "never"
```