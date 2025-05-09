/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { connectionsDelete } from "../funcs/connectionsDelete.js";
import {
  connectionsGenerate,
  GenerateAcceptEnum,
} from "../funcs/connectionsGenerate.js";
import { connectionsGet, GetAcceptEnum } from "../funcs/connectionsGet.js";
import { connectionsList, ListAcceptEnum } from "../funcs/connectionsList.js";
import {
  connectionsUpdate,
  UpdateAcceptEnum,
} from "../funcs/connectionsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export { ListAcceptEnum } from "../funcs/connectionsList.js";

export { GenerateAcceptEnum } from "../funcs/connectionsGenerate.js";

export { GetAcceptEnum } from "../funcs/connectionsGet.js";

export { UpdateAcceptEnum } from "../funcs/connectionsUpdate.js";

export class Connections extends ClientSDK {
  /**
   * List connections
   */
  async list(
    request: operations.ListConnectionsRequest,
    options?: RequestOptions & { acceptHeaderOverride?: ListAcceptEnum },
  ): Promise<operations.ListConnectionsResponse> {
    return unwrapAsync(connectionsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Generate a new connection
   *
   * @remarks
   * For providers which support OAuth2 Authorization Code, it is recommended that you use the [/oauth-connect endpoint](https://docs.withampersand.com/reference/oauth/get-url-for-oauth-flow) instead, unless you already have the refresh token and are importing it into Ampersand.
   */
  async generate(
    request: operations.GenerateConnectionRequest,
    options?: RequestOptions & { acceptHeaderOverride?: GenerateAcceptEnum },
  ): Promise<operations.GenerateConnectionResponse> {
    return unwrapAsync(connectionsGenerate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a connection
   */
  async get(
    request: operations.GetConnectionRequest,
    options?: RequestOptions & { acceptHeaderOverride?: GetAcceptEnum },
  ): Promise<operations.GetConnectionResponse> {
    return unwrapAsync(connectionsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a connection.
   *
   * @remarks
   * Update an existing connection.
   */
  async update(
    request: operations.UpdateConnectionRequest,
    options?: RequestOptions & { acceptHeaderOverride?: UpdateAcceptEnum },
  ): Promise<operations.UpdateConnectionResponse> {
    return unwrapAsync(connectionsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a connection
   */
  async delete(
    request: operations.DeleteConnectionRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteConnectionAPIProblem | undefined> {
    return unwrapAsync(connectionsDelete(
      this,
      request,
      options,
    ));
  }
}
