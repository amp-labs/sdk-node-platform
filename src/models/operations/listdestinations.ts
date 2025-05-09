/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListDestinationsRequest = {
  /**
   * The Ampersand project ID or project name.
   */
  projectIdOrName: string;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type ListDestinationsAPIProblem = {
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

export type ListDestinationsMetadata = {
  /**
   * Webhook URL
   */
  url?: string | undefined;
  /**
   * Additional headers to add when Ampersand sends a webhook message
   */
  headers?: { [k: string]: string } | null | undefined;
};

export type ListDestinationsDestination = {
  /**
   * The destination ID.
   */
  id: string;
  /**
   * User-defined name for the destination
   */
  name: string;
  /**
   * The type of the destination
   */
  type: string;
  metadata: ListDestinationsMetadata;
  /**
   * The time the destination was created.
   */
  createTime: Date;
  /**
   * The time the destination was updated.
   */
  updateTime?: Date | undefined;
};

export type ListDestinationsResponse =
  | ListDestinationsAPIProblem
  | Array<ListDestinationsDestination>;

/** @internal */
export const ListDestinationsRequest$inboundSchema: z.ZodType<
  ListDestinationsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectIdOrName: z.string(),
});

/** @internal */
export type ListDestinationsRequest$Outbound = {
  projectIdOrName: string;
};

/** @internal */
export const ListDestinationsRequest$outboundSchema: z.ZodType<
  ListDestinationsRequest$Outbound,
  z.ZodTypeDef,
  ListDestinationsRequest
> = z.object({
  projectIdOrName: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDestinationsRequest$ {
  /** @deprecated use `ListDestinationsRequest$inboundSchema` instead. */
  export const inboundSchema = ListDestinationsRequest$inboundSchema;
  /** @deprecated use `ListDestinationsRequest$outboundSchema` instead. */
  export const outboundSchema = ListDestinationsRequest$outboundSchema;
  /** @deprecated use `ListDestinationsRequest$Outbound` instead. */
  export type Outbound = ListDestinationsRequest$Outbound;
}

export function listDestinationsRequestToJSON(
  listDestinationsRequest: ListDestinationsRequest,
): string {
  return JSON.stringify(
    ListDestinationsRequest$outboundSchema.parse(listDestinationsRequest),
  );
}

export function listDestinationsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListDestinationsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDestinationsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDestinationsRequest' from JSON`,
  );
}

/** @internal */
export const ListDestinationsAPIProblem$inboundSchema: z.ZodType<
  ListDestinationsAPIProblem,
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
export type ListDestinationsAPIProblem$Outbound = {
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
export const ListDestinationsAPIProblem$outboundSchema: z.ZodType<
  ListDestinationsAPIProblem$Outbound,
  z.ZodTypeDef,
  ListDestinationsAPIProblem
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
export namespace ListDestinationsAPIProblem$ {
  /** @deprecated use `ListDestinationsAPIProblem$inboundSchema` instead. */
  export const inboundSchema = ListDestinationsAPIProblem$inboundSchema;
  /** @deprecated use `ListDestinationsAPIProblem$outboundSchema` instead. */
  export const outboundSchema = ListDestinationsAPIProblem$outboundSchema;
  /** @deprecated use `ListDestinationsAPIProblem$Outbound` instead. */
  export type Outbound = ListDestinationsAPIProblem$Outbound;
}

export function listDestinationsAPIProblemToJSON(
  listDestinationsAPIProblem: ListDestinationsAPIProblem,
): string {
  return JSON.stringify(
    ListDestinationsAPIProblem$outboundSchema.parse(listDestinationsAPIProblem),
  );
}

export function listDestinationsAPIProblemFromJSON(
  jsonString: string,
): SafeParseResult<ListDestinationsAPIProblem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDestinationsAPIProblem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDestinationsAPIProblem' from JSON`,
  );
}

/** @internal */
export const ListDestinationsMetadata$inboundSchema: z.ZodType<
  ListDestinationsMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string().optional(),
  headers: z.nullable(z.record(z.string())).optional(),
});

/** @internal */
export type ListDestinationsMetadata$Outbound = {
  url?: string | undefined;
  headers?: { [k: string]: string } | null | undefined;
};

/** @internal */
export const ListDestinationsMetadata$outboundSchema: z.ZodType<
  ListDestinationsMetadata$Outbound,
  z.ZodTypeDef,
  ListDestinationsMetadata
> = z.object({
  url: z.string().optional(),
  headers: z.nullable(z.record(z.string())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDestinationsMetadata$ {
  /** @deprecated use `ListDestinationsMetadata$inboundSchema` instead. */
  export const inboundSchema = ListDestinationsMetadata$inboundSchema;
  /** @deprecated use `ListDestinationsMetadata$outboundSchema` instead. */
  export const outboundSchema = ListDestinationsMetadata$outboundSchema;
  /** @deprecated use `ListDestinationsMetadata$Outbound` instead. */
  export type Outbound = ListDestinationsMetadata$Outbound;
}

export function listDestinationsMetadataToJSON(
  listDestinationsMetadata: ListDestinationsMetadata,
): string {
  return JSON.stringify(
    ListDestinationsMetadata$outboundSchema.parse(listDestinationsMetadata),
  );
}

export function listDestinationsMetadataFromJSON(
  jsonString: string,
): SafeParseResult<ListDestinationsMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDestinationsMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDestinationsMetadata' from JSON`,
  );
}

/** @internal */
export const ListDestinationsDestination$inboundSchema: z.ZodType<
  ListDestinationsDestination,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  metadata: z.lazy(() => ListDestinationsMetadata$inboundSchema),
  createTime: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updateTime: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type ListDestinationsDestination$Outbound = {
  id: string;
  name: string;
  type: string;
  metadata: ListDestinationsMetadata$Outbound;
  createTime: string;
  updateTime?: string | undefined;
};

/** @internal */
export const ListDestinationsDestination$outboundSchema: z.ZodType<
  ListDestinationsDestination$Outbound,
  z.ZodTypeDef,
  ListDestinationsDestination
> = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  metadata: z.lazy(() => ListDestinationsMetadata$outboundSchema),
  createTime: z.date().transform(v => v.toISOString()),
  updateTime: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDestinationsDestination$ {
  /** @deprecated use `ListDestinationsDestination$inboundSchema` instead. */
  export const inboundSchema = ListDestinationsDestination$inboundSchema;
  /** @deprecated use `ListDestinationsDestination$outboundSchema` instead. */
  export const outboundSchema = ListDestinationsDestination$outboundSchema;
  /** @deprecated use `ListDestinationsDestination$Outbound` instead. */
  export type Outbound = ListDestinationsDestination$Outbound;
}

export function listDestinationsDestinationToJSON(
  listDestinationsDestination: ListDestinationsDestination,
): string {
  return JSON.stringify(
    ListDestinationsDestination$outboundSchema.parse(
      listDestinationsDestination,
    ),
  );
}

export function listDestinationsDestinationFromJSON(
  jsonString: string,
): SafeParseResult<ListDestinationsDestination, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDestinationsDestination$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDestinationsDestination' from JSON`,
  );
}

/** @internal */
export const ListDestinationsResponse$inboundSchema: z.ZodType<
  ListDestinationsResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => ListDestinationsAPIProblem$inboundSchema),
  z.array(z.lazy(() => ListDestinationsDestination$inboundSchema)),
]);

/** @internal */
export type ListDestinationsResponse$Outbound =
  | ListDestinationsAPIProblem$Outbound
  | Array<ListDestinationsDestination$Outbound>;

/** @internal */
export const ListDestinationsResponse$outboundSchema: z.ZodType<
  ListDestinationsResponse$Outbound,
  z.ZodTypeDef,
  ListDestinationsResponse
> = z.union([
  z.lazy(() => ListDestinationsAPIProblem$outboundSchema),
  z.array(z.lazy(() => ListDestinationsDestination$outboundSchema)),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDestinationsResponse$ {
  /** @deprecated use `ListDestinationsResponse$inboundSchema` instead. */
  export const inboundSchema = ListDestinationsResponse$inboundSchema;
  /** @deprecated use `ListDestinationsResponse$outboundSchema` instead. */
  export const outboundSchema = ListDestinationsResponse$outboundSchema;
  /** @deprecated use `ListDestinationsResponse$Outbound` instead. */
  export type Outbound = ListDestinationsResponse$Outbound;
}

export function listDestinationsResponseToJSON(
  listDestinationsResponse: ListDestinationsResponse,
): string {
  return JSON.stringify(
    ListDestinationsResponse$outboundSchema.parse(listDestinationsResponse),
  );
}

export function listDestinationsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListDestinationsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListDestinationsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListDestinationsResponse' from JSON`,
  );
}
