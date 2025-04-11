<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDKNodePlatform } from "@amp-labs/sdk-node-platform";

const sdkNodePlatform = new SDKNodePlatform({
  apiKeyHeader: process.env["SDKNODEPLATFORM_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await sdkNodePlatform.oauth.connect({
    providerWorkspaceRef: "salesforce-instance-domain",
    projectId: "my-project",
    groupRef: "group-123",
    groupName: "Organization Name",
    consumerRef: "user_123456",
    consumerName: "John Doe",
    providerAppId: "32356abe-d2fd-49c7-9030-abdcbc6456d4",
    provider: "salesforce",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->