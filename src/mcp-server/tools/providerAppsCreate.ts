/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { providerAppsCreate } from "../../funcs/providerAppsCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateProviderAppRequest$inboundSchema,
};

export const tool$providerAppsCreate: ToolDefinition<typeof args> = {
  name: "provider-apps-create",
  description: `Create a new provider app`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await providerAppsCreate(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
