/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ConnectAcceptEnum, oauthConnect } from "../funcs/oauthConnect.js";
import { oauthUpdate, UpdateAcceptEnum } from "../funcs/oauthUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export { ConnectAcceptEnum } from "../funcs/oauthConnect.js";

export { UpdateAcceptEnum } from "../funcs/oauthUpdate.js";

export class Oauth extends ClientSDK {
  /**
   * Get URL for OAuth flow
   *
   * @remarks
   * Generate a URL for the browser to render to kick off OAuth flow.
   */
  async connect(
    request: operations.OauthConnectRequestBody,
    options?: RequestOptions & { acceptHeaderOverride?: ConnectAcceptEnum },
  ): Promise<operations.OauthConnectResponse> {
    return unwrapAsync(oauthConnect(
      this,
      request,
      options,
    ));
  }

  /**
   * Get URL for updating OAuth connection
   *
   * @remarks
   * Generate a URL for the browser to render to kick off OAuth flow that updates an existing connection.
   */
  async update(
    request: operations.OauthUpdateRequest,
    options?: RequestOptions & { acceptHeaderOverride?: UpdateAcceptEnum },
  ): Promise<operations.OauthUpdateResponse> {
    return unwrapAsync(oauthUpdate(
      this,
      request,
      options,
    ));
  }
}
