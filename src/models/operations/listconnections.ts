/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListConnectionsRequest = {
  /**
   * The Ampersand project ID or project name.
   */
  projectIdOrName: string;
  /**
   * The provider name (e.g. "salesforce", "hubspot")
   */
  provider?: string | undefined;
  /**
   * The ID of the user group that has access to this installation.
   */
  groupRef?: string | undefined;
  /**
   * The consumer reference.
   */
  consumerRef?: string | undefined;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type ListConnectionsAPIProblem = {
  /**
   * An absolute URI that identifies the problem type
   */
  type?: string | undefined;
  /**
   * An absolute URI that, when dereferenced, provides human-readable documentation for the problem type (e.g. using HTML).
   */
  href?: string | undefined;
  /**
   * A short summary of the problem type. Written in English and readable for engineers (usually not suited for non technical stakeholders and not localized).
   */
  title?: string | undefined;
  /**
   * The HTTP status code generated by the origin server for this occurrence of the problem.
   */
  status?: number | undefined;
  /**
   * A human-readable explanation specific to this occurrence of the problem
   */
  detail?: string | undefined;
  /**
   * An absolute URI that identifies the specific occurrence of the problem. It may or may not yield further information if dereferenced.
   */
  instance?: string | undefined;
  /**
   * The subsystem that generated the problem
   */
  subsystem?: string | undefined;
  /**
   * The time the problem occurred, formatted as RFC-3339
   */
  time?: Date | undefined;
  /**
   * A unique identifier for the request, useful for debugging
   */
  requestId?: string | undefined;
  /**
   * A list of problems that caused this problem. This can be used to represent multiple
   *
   * @remarks
   * root causes. There is no guaranteed ordering of the causes.
   */
  causes?: Array<string> | undefined;
  /**
   * A brief description of how to resolve the problem
   */
  remedy?: string | undefined;
  /**
   * An email address to contact for support
   */
  supportEmail?: string | undefined;
  /**
   * A phone number to contact for support
   */
  supportPhone?: string | undefined;
  /**
   * A URL to contact for support
   */
  supportUrl?: string | undefined;
  /**
   * Whether the request can be retried
   */
  retryable?: boolean | undefined;
  /**
   * A timestamp after which the request can be retried, formatted as RFC-3339
   */
  retryAfter?: Date | undefined;
  /**
   * Additional context for the problem
   */
  context?: { [k: string]: any } | undefined;
};

export type ListConnectionsProviderApp = {
  /**
   * The provider app ID.
   */
  id: string;
  /**
   * The Ampersand project ID.
   */
  projectId: string;
  /**
   * The ID used by the provider to identify the app (optional).
   */
  externalRef?: string | undefined;
  /**
   * The SaaS provider that this app connects to.
   */
  provider: string;
  /**
   * The OAuth client ID for this app.
   */
  clientId: string;
  /**
   * The OAuth scopes for this app.
   */
  scopes?: Array<string> | undefined;
  /**
   * The time the provider app was created.
   */
  createTime: Date;
  /**
   * The time the provider app was updated.
   */
  updateTime?: Date | undefined;
};

export type ListConnectionsGroup = {
  /**
   * The ID of the user group that has access to this installation.
   */
  groupRef: string;
  /**
   * The name of the user group that has access to this installation.
   */
  groupName: string;
  /**
   * The Ampersand project ID.
   */
  projectId: string;
  /**
   * The time the group was created.
   */
  createTime: Date;
  /**
   * The time the group was last updated.
   */
  updateTime?: Date | undefined;
};

export type Consumer = {
  /**
   * The consumer reference.
   */
  consumerRef: string;
  /**
   * The name of the consumer.
   */
  consumerName: string;
  /**
   * The Ampersand project ID.
   */
  projectId: string;
  /**
   * The time the consumer was created.
   */
  createTime: Date;
  /**
   * The time the consumer was last updated.
   */
  updateTime?: Date | undefined;
};

/**
 * The authentication scheme used for this connection.
 */
export const AuthScheme = {
  None: "none",
  ApiKey: "apiKey",
  Basic: "basic",
  Oauth2AuthorizationCode: "oauth2/authorizationCode",
  Oauth2AuthorizationCodePKCE: "oauth2/authorizationCodePKCE",
  Oauth2ClientCredentials: "oauth2/clientCredentials",
  Oauth2Password: "oauth2/password",
} as const;
/**
 * The authentication scheme used for this connection.
 */
export type AuthScheme = ClosedEnum<typeof AuthScheme>;

/**
 * The status of the connection.
 */
export const Status = {
  Created: "created",
  Working: "working",
  BadCredentials: "bad_credentials",
} as const;
/**
 * The status of the connection.
 */
export type Status = ClosedEnum<typeof Status>;

/**
 * The access token for the connection.
 */
export type ListConnectionsAccessToken = {
  token: string;
  issuedAt?: Date | undefined;
  expiresAt?: Date | undefined;
};

/**
 * The refresh token to use for the connection.
 */
export type ListConnectionsRefreshToken = {
  token: string;
  issuedAt?: Date | undefined;
  expiresAt?: Date | undefined;
};

export type OAuth2AuthorizationCodeToken = {
  /**
   * The access token for the connection.
   */
  accessToken?: ListConnectionsAccessToken | undefined;
  /**
   * The refresh token to use for the connection.
   */
  refreshToken?: ListConnectionsRefreshToken | undefined;
  /**
   * The scopes for the tokens.
   */
  scopes?: Array<string> | undefined;
};

export type Connection = {
  /**
   * The connection ID.
   */
  id: string;
  /**
   * The Ampersand project ID.
   */
  projectId: string;
  /**
   * The SaaS provider that this Connection is for.
   */
  provider: string;
  providerApp?: ListConnectionsProviderApp | undefined;
  group: ListConnectionsGroup;
  consumer: Consumer;
  /**
   * If available, the identifier for the provider workspace (e.g. the Salesforce subdomain)
   */
  providerWorkspaceRef?: string | undefined;
  /**
   * If available, the ID that Salesforce/Hubspot uses to identify this user (e.g. Salesforce has IDs in the form of https://login.salesforce.com/id/00D4x0000019CQTEA2/0054x000000orJ4AA)
   */
  providerConsumerRef?: string | undefined;
  /**
   * The time the connection was created.
   */
  createTime: Date;
  /**
   * The time the connection was last updated.
   */
  updateTime?: Date | undefined;
  /**
   * The authentication scheme used for this connection.
   */
  authScheme: AuthScheme;
  /**
   * The status of the connection.
   */
  status: Status;
  oauth2AuthorizationCode?: OAuth2AuthorizationCodeToken | undefined;
  /**
   * The API key used while making the connection.
   */
  apiKey?: string | undefined;
};

export type ListConnectionsResponse =
  | ListConnectionsAPIProblem
  | Array<Connection>;

/** @internal */
export const ListConnectionsRequest$inboundSchema: z.ZodType<
  ListConnectionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectIdOrName: z.string(),
  provider: z.string().optional(),
  groupRef: z.string().optional(),
  consumerRef: z.string().optional(),
});

/** @internal */
export type ListConnectionsRequest$Outbound = {
  projectIdOrName: string;
  provider?: string | undefined;
  groupRef?: string | undefined;
  consumerRef?: string | undefined;
};

/** @internal */
export const ListConnectionsRequest$outboundSchema: z.ZodType<
  ListConnectionsRequest$Outbound,
  z.ZodTypeDef,
  ListConnectionsRequest
> = z.object({
  projectIdOrName: z.string(),
  provider: z.string().optional(),
  groupRef: z.string().optional(),
  consumerRef: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListConnectionsRequest$ {
  /** @deprecated use `ListConnectionsRequest$inboundSchema` instead. */
  export const inboundSchema = ListConnectionsRequest$inboundSchema;
  /** @deprecated use `ListConnectionsRequest$outboundSchema` instead. */
  export const outboundSchema = ListConnectionsRequest$outboundSchema;
  /** @deprecated use `ListConnectionsRequest$Outbound` instead. */
  export type Outbound = ListConnectionsRequest$Outbound;
}

export function listConnectionsRequestToJSON(
  listConnectionsRequest: ListConnectionsRequest,
): string {
  return JSON.stringify(
    ListConnectionsRequest$outboundSchema.parse(listConnectionsRequest),
  );
}

export function listConnectionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListConnectionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListConnectionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListConnectionsRequest' from JSON`,
  );
}

/** @internal */
export const ListConnectionsAPIProblem$inboundSchema: z.ZodType<
  ListConnectionsAPIProblem,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.string().default("about:blank"),
  href: z.string().optional(),
  title: z.string().optional(),
  status: z.number().int().optional(),
  detail: z.string().optional(),
  instance: z.string().optional(),
  subsystem: z.string().optional(),
  time: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  requestId: z.string().optional(),
  causes: z.array(z.string()).optional(),
  remedy: z.string().optional(),
  supportEmail: z.string().optional(),
  supportPhone: z.string().optional(),
  supportUrl: z.string().optional(),
  retryable: z.boolean().optional(),
  retryAfter: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  context: z.record(z.any()).optional(),
});

/** @internal */
export type ListConnectionsAPIProblem$Outbound = {
  type: string;
  href?: string | undefined;
  title?: string | undefined;
  status?: number | undefined;
  detail?: string | undefined;
  instance?: string | undefined;
  subsystem?: string | undefined;
  time?: string | undefined;
  requestId?: string | undefined;
  causes?: Array<string> | undefined;
  remedy?: string | undefined;
  supportEmail?: string | undefined;
  supportPhone?: string | undefined;
  supportUrl?: string | undefined;
  retryable?: boolean | undefined;
  retryAfter?: string | undefined;
  context?: { [k: string]: any } | undefined;
};

/** @internal */
export const ListConnectionsAPIProblem$outboundSchema: z.ZodType<
  ListConnectionsAPIProblem$Outbound,
  z.ZodTypeDef,
  ListConnectionsAPIProblem
> = z.object({
  type: z.string().default("about:blank"),
  href: z.string().optional(),
  title: z.string().optional(),
  status: z.number().int().optional(),
  detail: z.string().optional(),
  instance: z.string().optional(),
  subsystem: z.string().optional(),
  time: z.date().transform(v => v.toISOString()).optional(),
  requestId: z.string().optional(),
  causes: z.array(z.string()).optional(),
  remedy: z.string().optional(),
  supportEmail: z.string().optional(),
  supportPhone: z.string().optional(),
  supportUrl: z.string().optional(),
  retryable: z.boolean().optional(),
  retryAfter: z.date().transform(v => v.toISOString()).optional(),
  context: z.record(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListConnectionsAPIProblem$ {
  /** @deprecated use `ListConnectionsAPIProblem$inboundSchema` instead. */
  export const inboundSchema = ListConnectionsAPIProblem$inboundSchema;
  /** @deprecated use `ListConnectionsAPIProblem$outboundSchema` instead. */
  export const outboundSchema = ListConnectionsAPIProblem$outboundSchema;
  /** @deprecated use `ListConnectionsAPIProblem$Outbound` instead. */
  export type Outbound = ListConnectionsAPIProblem$Outbound;
}

export function listConnectionsAPIProblemToJSON(
  listConnectionsAPIProblem: ListConnectionsAPIProblem,
): string {
  return JSON.stringify(
    ListConnectionsAPIProblem$outboundSchema.parse(listConnectionsAPIProblem),
  );
}

export function listConnectionsAPIProblemFromJSON(
  jsonString: string,
): SafeParseResult<ListConnectionsAPIProblem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListConnectionsAPIProblem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListConnectionsAPIProblem' from JSON`,
  );
}

/** @internal */
export const ListConnectionsProviderApp$inboundSchema: z.ZodType<
  ListConnectionsProviderApp,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  projectId: z.string(),
  externalRef: z.string().optional(),
  provider: z.string(),
  clientId: z.string(),
  scopes: z.array(z.string()).optional(),
  createTime: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updateTime: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type ListConnectionsProviderApp$Outbound = {
  id: string;
  projectId: string;
  externalRef?: string | undefined;
  provider: string;
  clientId: string;
  scopes?: Array<string> | undefined;
  createTime: string;
  updateTime?: string | undefined;
};

/** @internal */
export const ListConnectionsProviderApp$outboundSchema: z.ZodType<
  ListConnectionsProviderApp$Outbound,
  z.ZodTypeDef,
  ListConnectionsProviderApp
> = z.object({
  id: z.string(),
  projectId: z.string(),
  externalRef: z.string().optional(),
  provider: z.string(),
  clientId: z.string(),
  scopes: z.array(z.string()).optional(),
  createTime: z.date().transform(v => v.toISOString()),
  updateTime: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListConnectionsProviderApp$ {
  /** @deprecated use `ListConnectionsProviderApp$inboundSchema` instead. */
  export const inboundSchema = ListConnectionsProviderApp$inboundSchema;
  /** @deprecated use `ListConnectionsProviderApp$outboundSchema` instead. */
  export const outboundSchema = ListConnectionsProviderApp$outboundSchema;
  /** @deprecated use `ListConnectionsProviderApp$Outbound` instead. */
  export type Outbound = ListConnectionsProviderApp$Outbound;
}

export function listConnectionsProviderAppToJSON(
  listConnectionsProviderApp: ListConnectionsProviderApp,
): string {
  return JSON.stringify(
    ListConnectionsProviderApp$outboundSchema.parse(listConnectionsProviderApp),
  );
}

export function listConnectionsProviderAppFromJSON(
  jsonString: string,
): SafeParseResult<ListConnectionsProviderApp, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListConnectionsProviderApp$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListConnectionsProviderApp' from JSON`,
  );
}

/** @internal */
export const ListConnectionsGroup$inboundSchema: z.ZodType<
  ListConnectionsGroup,
  z.ZodTypeDef,
  unknown
> = z.object({
  groupRef: z.string(),
  groupName: z.string(),
  projectId: z.string(),
  createTime: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updateTime: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type ListConnectionsGroup$Outbound = {
  groupRef: string;
  groupName: string;
  projectId: string;
  createTime: string;
  updateTime?: string | undefined;
};

/** @internal */
export const ListConnectionsGroup$outboundSchema: z.ZodType<
  ListConnectionsGroup$Outbound,
  z.ZodTypeDef,
  ListConnectionsGroup
> = z.object({
  groupRef: z.string(),
  groupName: z.string(),
  projectId: z.string(),
  createTime: z.date().transform(v => v.toISOString()),
  updateTime: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListConnectionsGroup$ {
  /** @deprecated use `ListConnectionsGroup$inboundSchema` instead. */
  export const inboundSchema = ListConnectionsGroup$inboundSchema;
  /** @deprecated use `ListConnectionsGroup$outboundSchema` instead. */
  export const outboundSchema = ListConnectionsGroup$outboundSchema;
  /** @deprecated use `ListConnectionsGroup$Outbound` instead. */
  export type Outbound = ListConnectionsGroup$Outbound;
}

export function listConnectionsGroupToJSON(
  listConnectionsGroup: ListConnectionsGroup,
): string {
  return JSON.stringify(
    ListConnectionsGroup$outboundSchema.parse(listConnectionsGroup),
  );
}

export function listConnectionsGroupFromJSON(
  jsonString: string,
): SafeParseResult<ListConnectionsGroup, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListConnectionsGroup$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListConnectionsGroup' from JSON`,
  );
}

/** @internal */
export const Consumer$inboundSchema: z.ZodType<
  Consumer,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerRef: z.string(),
  consumerName: z.string(),
  projectId: z.string(),
  createTime: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updateTime: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type Consumer$Outbound = {
  consumerRef: string;
  consumerName: string;
  projectId: string;
  createTime: string;
  updateTime?: string | undefined;
};

/** @internal */
export const Consumer$outboundSchema: z.ZodType<
  Consumer$Outbound,
  z.ZodTypeDef,
  Consumer
> = z.object({
  consumerRef: z.string(),
  consumerName: z.string(),
  projectId: z.string(),
  createTime: z.date().transform(v => v.toISOString()),
  updateTime: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Consumer$ {
  /** @deprecated use `Consumer$inboundSchema` instead. */
  export const inboundSchema = Consumer$inboundSchema;
  /** @deprecated use `Consumer$outboundSchema` instead. */
  export const outboundSchema = Consumer$outboundSchema;
  /** @deprecated use `Consumer$Outbound` instead. */
  export type Outbound = Consumer$Outbound;
}

export function consumerToJSON(consumer: Consumer): string {
  return JSON.stringify(Consumer$outboundSchema.parse(consumer));
}

export function consumerFromJSON(
  jsonString: string,
): SafeParseResult<Consumer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Consumer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Consumer' from JSON`,
  );
}

/** @internal */
export const AuthScheme$inboundSchema: z.ZodNativeEnum<typeof AuthScheme> = z
  .nativeEnum(AuthScheme);

/** @internal */
export const AuthScheme$outboundSchema: z.ZodNativeEnum<typeof AuthScheme> =
  AuthScheme$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthScheme$ {
  /** @deprecated use `AuthScheme$inboundSchema` instead. */
  export const inboundSchema = AuthScheme$inboundSchema;
  /** @deprecated use `AuthScheme$outboundSchema` instead. */
  export const outboundSchema = AuthScheme$outboundSchema;
}

/** @internal */
export const Status$inboundSchema: z.ZodNativeEnum<typeof Status> = z
  .nativeEnum(Status);

/** @internal */
export const Status$outboundSchema: z.ZodNativeEnum<typeof Status> =
  Status$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
  /** @deprecated use `Status$inboundSchema` instead. */
  export const inboundSchema = Status$inboundSchema;
  /** @deprecated use `Status$outboundSchema` instead. */
  export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const ListConnectionsAccessToken$inboundSchema: z.ZodType<
  ListConnectionsAccessToken,
  z.ZodTypeDef,
  unknown
> = z.object({
  token: z.string(),
  issuedAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  expiresAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type ListConnectionsAccessToken$Outbound = {
  token: string;
  issuedAt?: string | undefined;
  expiresAt?: string | undefined;
};

/** @internal */
export const ListConnectionsAccessToken$outboundSchema: z.ZodType<
  ListConnectionsAccessToken$Outbound,
  z.ZodTypeDef,
  ListConnectionsAccessToken
> = z.object({
  token: z.string(),
  issuedAt: z.date().transform(v => v.toISOString()).optional(),
  expiresAt: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListConnectionsAccessToken$ {
  /** @deprecated use `ListConnectionsAccessToken$inboundSchema` instead. */
  export const inboundSchema = ListConnectionsAccessToken$inboundSchema;
  /** @deprecated use `ListConnectionsAccessToken$outboundSchema` instead. */
  export const outboundSchema = ListConnectionsAccessToken$outboundSchema;
  /** @deprecated use `ListConnectionsAccessToken$Outbound` instead. */
  export type Outbound = ListConnectionsAccessToken$Outbound;
}

export function listConnectionsAccessTokenToJSON(
  listConnectionsAccessToken: ListConnectionsAccessToken,
): string {
  return JSON.stringify(
    ListConnectionsAccessToken$outboundSchema.parse(listConnectionsAccessToken),
  );
}

export function listConnectionsAccessTokenFromJSON(
  jsonString: string,
): SafeParseResult<ListConnectionsAccessToken, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListConnectionsAccessToken$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListConnectionsAccessToken' from JSON`,
  );
}

/** @internal */
export const ListConnectionsRefreshToken$inboundSchema: z.ZodType<
  ListConnectionsRefreshToken,
  z.ZodTypeDef,
  unknown
> = z.object({
  token: z.string(),
  issuedAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  expiresAt: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type ListConnectionsRefreshToken$Outbound = {
  token: string;
  issuedAt?: string | undefined;
  expiresAt?: string | undefined;
};

/** @internal */
export const ListConnectionsRefreshToken$outboundSchema: z.ZodType<
  ListConnectionsRefreshToken$Outbound,
  z.ZodTypeDef,
  ListConnectionsRefreshToken
> = z.object({
  token: z.string(),
  issuedAt: z.date().transform(v => v.toISOString()).optional(),
  expiresAt: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListConnectionsRefreshToken$ {
  /** @deprecated use `ListConnectionsRefreshToken$inboundSchema` instead. */
  export const inboundSchema = ListConnectionsRefreshToken$inboundSchema;
  /** @deprecated use `ListConnectionsRefreshToken$outboundSchema` instead. */
  export const outboundSchema = ListConnectionsRefreshToken$outboundSchema;
  /** @deprecated use `ListConnectionsRefreshToken$Outbound` instead. */
  export type Outbound = ListConnectionsRefreshToken$Outbound;
}

export function listConnectionsRefreshTokenToJSON(
  listConnectionsRefreshToken: ListConnectionsRefreshToken,
): string {
  return JSON.stringify(
    ListConnectionsRefreshToken$outboundSchema.parse(
      listConnectionsRefreshToken,
    ),
  );
}

export function listConnectionsRefreshTokenFromJSON(
  jsonString: string,
): SafeParseResult<ListConnectionsRefreshToken, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListConnectionsRefreshToken$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListConnectionsRefreshToken' from JSON`,
  );
}

/** @internal */
export const OAuth2AuthorizationCodeToken$inboundSchema: z.ZodType<
  OAuth2AuthorizationCodeToken,
  z.ZodTypeDef,
  unknown
> = z.object({
  accessToken: z.lazy(() => ListConnectionsAccessToken$inboundSchema)
    .optional(),
  refreshToken: z.lazy(() => ListConnectionsRefreshToken$inboundSchema)
    .optional(),
  scopes: z.array(z.string()).optional(),
});

/** @internal */
export type OAuth2AuthorizationCodeToken$Outbound = {
  accessToken?: ListConnectionsAccessToken$Outbound | undefined;
  refreshToken?: ListConnectionsRefreshToken$Outbound | undefined;
  scopes?: Array<string> | undefined;
};

/** @internal */
export const OAuth2AuthorizationCodeToken$outboundSchema: z.ZodType<
  OAuth2AuthorizationCodeToken$Outbound,
  z.ZodTypeDef,
  OAuth2AuthorizationCodeToken
> = z.object({
  accessToken: z.lazy(() => ListConnectionsAccessToken$outboundSchema)
    .optional(),
  refreshToken: z.lazy(() => ListConnectionsRefreshToken$outboundSchema)
    .optional(),
  scopes: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OAuth2AuthorizationCodeToken$ {
  /** @deprecated use `OAuth2AuthorizationCodeToken$inboundSchema` instead. */
  export const inboundSchema = OAuth2AuthorizationCodeToken$inboundSchema;
  /** @deprecated use `OAuth2AuthorizationCodeToken$outboundSchema` instead. */
  export const outboundSchema = OAuth2AuthorizationCodeToken$outboundSchema;
  /** @deprecated use `OAuth2AuthorizationCodeToken$Outbound` instead. */
  export type Outbound = OAuth2AuthorizationCodeToken$Outbound;
}

export function oAuth2AuthorizationCodeTokenToJSON(
  oAuth2AuthorizationCodeToken: OAuth2AuthorizationCodeToken,
): string {
  return JSON.stringify(
    OAuth2AuthorizationCodeToken$outboundSchema.parse(
      oAuth2AuthorizationCodeToken,
    ),
  );
}

export function oAuth2AuthorizationCodeTokenFromJSON(
  jsonString: string,
): SafeParseResult<OAuth2AuthorizationCodeToken, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OAuth2AuthorizationCodeToken$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OAuth2AuthorizationCodeToken' from JSON`,
  );
}

/** @internal */
export const Connection$inboundSchema: z.ZodType<
  Connection,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  projectId: z.string(),
  provider: z.string(),
  providerApp: z.lazy(() => ListConnectionsProviderApp$inboundSchema)
    .optional(),
  group: z.lazy(() => ListConnectionsGroup$inboundSchema),
  consumer: z.lazy(() => Consumer$inboundSchema),
  providerWorkspaceRef: z.string().optional(),
  providerConsumerRef: z.string().optional(),
  createTime: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updateTime: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  authScheme: AuthScheme$inboundSchema,
  status: Status$inboundSchema,
  oauth2AuthorizationCode: z.lazy(() =>
    OAuth2AuthorizationCodeToken$inboundSchema
  ).optional(),
  apiKey: z.string().optional(),
});

/** @internal */
export type Connection$Outbound = {
  id: string;
  projectId: string;
  provider: string;
  providerApp?: ListConnectionsProviderApp$Outbound | undefined;
  group: ListConnectionsGroup$Outbound;
  consumer: Consumer$Outbound;
  providerWorkspaceRef?: string | undefined;
  providerConsumerRef?: string | undefined;
  createTime: string;
  updateTime?: string | undefined;
  authScheme: string;
  status: string;
  oauth2AuthorizationCode?: OAuth2AuthorizationCodeToken$Outbound | undefined;
  apiKey?: string | undefined;
};

/** @internal */
export const Connection$outboundSchema: z.ZodType<
  Connection$Outbound,
  z.ZodTypeDef,
  Connection
> = z.object({
  id: z.string(),
  projectId: z.string(),
  provider: z.string(),
  providerApp: z.lazy(() => ListConnectionsProviderApp$outboundSchema)
    .optional(),
  group: z.lazy(() => ListConnectionsGroup$outboundSchema),
  consumer: z.lazy(() => Consumer$outboundSchema),
  providerWorkspaceRef: z.string().optional(),
  providerConsumerRef: z.string().optional(),
  createTime: z.date().transform(v => v.toISOString()),
  updateTime: z.date().transform(v => v.toISOString()).optional(),
  authScheme: AuthScheme$outboundSchema,
  status: Status$outboundSchema,
  oauth2AuthorizationCode: z.lazy(() =>
    OAuth2AuthorizationCodeToken$outboundSchema
  ).optional(),
  apiKey: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Connection$ {
  /** @deprecated use `Connection$inboundSchema` instead. */
  export const inboundSchema = Connection$inboundSchema;
  /** @deprecated use `Connection$outboundSchema` instead. */
  export const outboundSchema = Connection$outboundSchema;
  /** @deprecated use `Connection$Outbound` instead. */
  export type Outbound = Connection$Outbound;
}

export function connectionToJSON(connection: Connection): string {
  return JSON.stringify(Connection$outboundSchema.parse(connection));
}

export function connectionFromJSON(
  jsonString: string,
): SafeParseResult<Connection, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Connection$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Connection' from JSON`,
  );
}

/** @internal */
export const ListConnectionsResponse$inboundSchema: z.ZodType<
  ListConnectionsResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => ListConnectionsAPIProblem$inboundSchema),
  z.array(z.lazy(() => Connection$inboundSchema)),
]);

/** @internal */
export type ListConnectionsResponse$Outbound =
  | ListConnectionsAPIProblem$Outbound
  | Array<Connection$Outbound>;

/** @internal */
export const ListConnectionsResponse$outboundSchema: z.ZodType<
  ListConnectionsResponse$Outbound,
  z.ZodTypeDef,
  ListConnectionsResponse
> = z.union([
  z.lazy(() => ListConnectionsAPIProblem$outboundSchema),
  z.array(z.lazy(() => Connection$outboundSchema)),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListConnectionsResponse$ {
  /** @deprecated use `ListConnectionsResponse$inboundSchema` instead. */
  export const inboundSchema = ListConnectionsResponse$inboundSchema;
  /** @deprecated use `ListConnectionsResponse$outboundSchema` instead. */
  export const outboundSchema = ListConnectionsResponse$outboundSchema;
  /** @deprecated use `ListConnectionsResponse$Outbound` instead. */
  export type Outbound = ListConnectionsResponse$Outbound;
}

export function listConnectionsResponseToJSON(
  listConnectionsResponse: ListConnectionsResponse,
): string {
  return JSON.stringify(
    ListConnectionsResponse$outboundSchema.parse(listConnectionsResponse),
  );
}

export function listConnectionsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListConnectionsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListConnectionsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListConnectionsResponse' from JSON`,
  );
}
