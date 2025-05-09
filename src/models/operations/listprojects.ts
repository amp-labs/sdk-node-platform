/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type ListProjectsAPIProblem = {
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

/**
 * Whether branding can be removed from the UI library.
 */
export type BrandingRemoval = {
  /**
   * Whether branding has been removed from the project.
   */
  value: boolean;
};

/**
 * The entitlements for the project.
 */
export type Entitlements = {
  /**
   * Whether branding can be removed from the UI library.
   */
  brandingRemoval?: BrandingRemoval | undefined;
};

export type ListProjectsProject = {
  /**
   * The project ID.
   */
  id: string;
  /**
   * The project name.
   */
  name: string;
  /**
   * The name of the application, which is displayed to end users.
   */
  appName: string;
  /**
   * The organization ID that this project belongs to.
   */
  orgId?: string | undefined;
  /**
   * The time the project was created.
   */
  createTime: Date;
  /**
   * The time the project was updated.
   */
  updateTime?: Date | undefined;
  /**
   * The entitlements for the project.
   */
  entitlements?: Entitlements | undefined;
};

export type ListProjectsResponse =
  | ListProjectsAPIProblem
  | Array<ListProjectsProject>;

/** @internal */
export const ListProjectsAPIProblem$inboundSchema: z.ZodType<
  ListProjectsAPIProblem,
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
export type ListProjectsAPIProblem$Outbound = {
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
export const ListProjectsAPIProblem$outboundSchema: z.ZodType<
  ListProjectsAPIProblem$Outbound,
  z.ZodTypeDef,
  ListProjectsAPIProblem
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
export namespace ListProjectsAPIProblem$ {
  /** @deprecated use `ListProjectsAPIProblem$inboundSchema` instead. */
  export const inboundSchema = ListProjectsAPIProblem$inboundSchema;
  /** @deprecated use `ListProjectsAPIProblem$outboundSchema` instead. */
  export const outboundSchema = ListProjectsAPIProblem$outboundSchema;
  /** @deprecated use `ListProjectsAPIProblem$Outbound` instead. */
  export type Outbound = ListProjectsAPIProblem$Outbound;
}

export function listProjectsAPIProblemToJSON(
  listProjectsAPIProblem: ListProjectsAPIProblem,
): string {
  return JSON.stringify(
    ListProjectsAPIProblem$outboundSchema.parse(listProjectsAPIProblem),
  );
}

export function listProjectsAPIProblemFromJSON(
  jsonString: string,
): SafeParseResult<ListProjectsAPIProblem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListProjectsAPIProblem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListProjectsAPIProblem' from JSON`,
  );
}

/** @internal */
export const BrandingRemoval$inboundSchema: z.ZodType<
  BrandingRemoval,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.boolean(),
});

/** @internal */
export type BrandingRemoval$Outbound = {
  value: boolean;
};

/** @internal */
export const BrandingRemoval$outboundSchema: z.ZodType<
  BrandingRemoval$Outbound,
  z.ZodTypeDef,
  BrandingRemoval
> = z.object({
  value: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BrandingRemoval$ {
  /** @deprecated use `BrandingRemoval$inboundSchema` instead. */
  export const inboundSchema = BrandingRemoval$inboundSchema;
  /** @deprecated use `BrandingRemoval$outboundSchema` instead. */
  export const outboundSchema = BrandingRemoval$outboundSchema;
  /** @deprecated use `BrandingRemoval$Outbound` instead. */
  export type Outbound = BrandingRemoval$Outbound;
}

export function brandingRemovalToJSON(
  brandingRemoval: BrandingRemoval,
): string {
  return JSON.stringify(BrandingRemoval$outboundSchema.parse(brandingRemoval));
}

export function brandingRemovalFromJSON(
  jsonString: string,
): SafeParseResult<BrandingRemoval, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BrandingRemoval$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BrandingRemoval' from JSON`,
  );
}

/** @internal */
export const Entitlements$inboundSchema: z.ZodType<
  Entitlements,
  z.ZodTypeDef,
  unknown
> = z.object({
  brandingRemoval: z.lazy(() => BrandingRemoval$inboundSchema).optional(),
});

/** @internal */
export type Entitlements$Outbound = {
  brandingRemoval?: BrandingRemoval$Outbound | undefined;
};

/** @internal */
export const Entitlements$outboundSchema: z.ZodType<
  Entitlements$Outbound,
  z.ZodTypeDef,
  Entitlements
> = z.object({
  brandingRemoval: z.lazy(() => BrandingRemoval$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Entitlements$ {
  /** @deprecated use `Entitlements$inboundSchema` instead. */
  export const inboundSchema = Entitlements$inboundSchema;
  /** @deprecated use `Entitlements$outboundSchema` instead. */
  export const outboundSchema = Entitlements$outboundSchema;
  /** @deprecated use `Entitlements$Outbound` instead. */
  export type Outbound = Entitlements$Outbound;
}

export function entitlementsToJSON(entitlements: Entitlements): string {
  return JSON.stringify(Entitlements$outboundSchema.parse(entitlements));
}

export function entitlementsFromJSON(
  jsonString: string,
): SafeParseResult<Entitlements, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Entitlements$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Entitlements' from JSON`,
  );
}

/** @internal */
export const ListProjectsProject$inboundSchema: z.ZodType<
  ListProjectsProject,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  appName: z.string(),
  orgId: z.string().optional(),
  createTime: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updateTime: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  entitlements: z.lazy(() => Entitlements$inboundSchema).optional(),
});

/** @internal */
export type ListProjectsProject$Outbound = {
  id: string;
  name: string;
  appName: string;
  orgId?: string | undefined;
  createTime: string;
  updateTime?: string | undefined;
  entitlements?: Entitlements$Outbound | undefined;
};

/** @internal */
export const ListProjectsProject$outboundSchema: z.ZodType<
  ListProjectsProject$Outbound,
  z.ZodTypeDef,
  ListProjectsProject
> = z.object({
  id: z.string(),
  name: z.string(),
  appName: z.string(),
  orgId: z.string().optional(),
  createTime: z.date().transform(v => v.toISOString()),
  updateTime: z.date().transform(v => v.toISOString()).optional(),
  entitlements: z.lazy(() => Entitlements$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListProjectsProject$ {
  /** @deprecated use `ListProjectsProject$inboundSchema` instead. */
  export const inboundSchema = ListProjectsProject$inboundSchema;
  /** @deprecated use `ListProjectsProject$outboundSchema` instead. */
  export const outboundSchema = ListProjectsProject$outboundSchema;
  /** @deprecated use `ListProjectsProject$Outbound` instead. */
  export type Outbound = ListProjectsProject$Outbound;
}

export function listProjectsProjectToJSON(
  listProjectsProject: ListProjectsProject,
): string {
  return JSON.stringify(
    ListProjectsProject$outboundSchema.parse(listProjectsProject),
  );
}

export function listProjectsProjectFromJSON(
  jsonString: string,
): SafeParseResult<ListProjectsProject, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListProjectsProject$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListProjectsProject' from JSON`,
  );
}

/** @internal */
export const ListProjectsResponse$inboundSchema: z.ZodType<
  ListProjectsResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => ListProjectsAPIProblem$inboundSchema),
  z.array(z.lazy(() => ListProjectsProject$inboundSchema)),
]);

/** @internal */
export type ListProjectsResponse$Outbound =
  | ListProjectsAPIProblem$Outbound
  | Array<ListProjectsProject$Outbound>;

/** @internal */
export const ListProjectsResponse$outboundSchema: z.ZodType<
  ListProjectsResponse$Outbound,
  z.ZodTypeDef,
  ListProjectsResponse
> = z.union([
  z.lazy(() => ListProjectsAPIProblem$outboundSchema),
  z.array(z.lazy(() => ListProjectsProject$outboundSchema)),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListProjectsResponse$ {
  /** @deprecated use `ListProjectsResponse$inboundSchema` instead. */
  export const inboundSchema = ListProjectsResponse$inboundSchema;
  /** @deprecated use `ListProjectsResponse$outboundSchema` instead. */
  export const outboundSchema = ListProjectsResponse$outboundSchema;
  /** @deprecated use `ListProjectsResponse$Outbound` instead. */
  export type Outbound = ListProjectsResponse$Outbound;
}

export function listProjectsResponseToJSON(
  listProjectsResponse: ListProjectsResponse,
): string {
  return JSON.stringify(
    ListProjectsResponse$outboundSchema.parse(listProjectsResponse),
  );
}

export function listProjectsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListProjectsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListProjectsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListProjectsResponse' from JSON`,
  );
}
