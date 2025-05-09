/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { destinationsGet } from "../../funcs/destinationsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetDestinationRequest$inboundSchema,
};

export const tool$destinationsGet: ToolDefinition<typeof args> = {
  name: "destinations-get",
  description: `Get a destination`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await destinationsGet(
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
