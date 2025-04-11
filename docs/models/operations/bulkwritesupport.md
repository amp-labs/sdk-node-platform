# BulkWriteSupport

## Example Usage

```typescript
import { BulkWriteSupport } from "@amp-labs/sdk-node-platform/models/operations";

let value: BulkWriteSupport = {
  insert: false,
  update: false,
  upsert: false,
  delete: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `insert`           | *boolean*          | :heavy_check_mark: | N/A                |
| `update`           | *boolean*          | :heavy_check_mark: | N/A                |
| `upsert`           | *boolean*          | :heavy_check_mark: | N/A                |
| `delete`           | *boolean*          | :heavy_check_mark: | N/A                |