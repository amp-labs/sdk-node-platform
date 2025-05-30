/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateProjectRequestBody = {
  /**
   * The app name.
   */
  appName: string;
  /**
   * The project name. Must be alphanumerics and hyphens only. Project names will be save in lowercase.
   */
  name: string;
  /**
   * The organization ID.
   */
  orgId: string;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type CreateProjectAPIProblem = {
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
export type CreateProjectBrandingRemoval = {
  /**
   * Whether branding has been removed from the project.
   */
  value: boolean;
};

/**
 * The entitlements for the project.
 */
export type CreateProjectEntitlements = {
  /**
   * Whether branding can be removed from the UI library.
   */
  brandingRemoval?: CreateProjectBrandingRemoval | undefined;
};

/**
 * The newly created project
 */
export type CreateProjectProject = {
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
  entitlements?: CreateProjectEntitlements | undefined;
};

export type CreateProjectResponse =
  | CreateProjectProject
  | CreateProjectAPIProblem;

/** @internal */
export const CreateProjectRequestBody$inboundSchema: z.ZodType<
  CreateProjectRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  appName: z.string(),
  name: z.string(),
  orgId: z.string(),
});

/** @internal */
export type CreateProjectRequestBody$Outbound = {
  appName: string;
  name: string;
  orgId: string;
};

/** @internal */
export const CreateProjectRequestBody$outboundSchema: z.ZodType<
  CreateProjectRequestBody$Outbound,
  z.ZodTypeDef,
  CreateProjectRequestBody
> = z.object({
  appName: z.string(),
  name: z.string(),
  orgId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateProjectRequestBody$ {
  /** @deprecated use `CreateProjectRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateProjectRequestBody$inboundSchema;
  /** @deprecated use `CreateProjectRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateProjectRequestBody$outboundSchema;
  /** @deprecated use `CreateProjectRequestBody$Outbound` instead. */
  export type Outbound = CreateProjectRequestBody$Outbound;
}

export function createProjectRequestBodyToJSON(
  createProjectRequestBody: CreateProjectRequestBody,
): string {
  return JSON.stringify(
    CreateProjectRequestBody$outboundSchema.parse(createProjectRequestBody),
  );
}

export function createProjectRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateProjectRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateProjectRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateProjectRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateProjectAPIProblem$inboundSchema: z.ZodType<
  CreateProjectAPIProblem,
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
export type CreateProjectAPIProblem$Outbound = {
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
export const CreateProjectAPIProblem$outboundSchema: z.ZodType<
  CreateProjectAPIProblem$Outbound,
  z.ZodTypeDef,
  CreateProjectAPIProblem
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
export namespace CreateProjectAPIProblem$ {
  /** @deprecated use `CreateProjectAPIProblem$inboundSchema` instead. */
  export const inboundSchema = CreateProjectAPIProblem$inboundSchema;
  /** @deprecated use `CreateProjectAPIProblem$outboundSchema` instead. */
  export const outboundSchema = CreateProjectAPIProblem$outboundSchema;
  /** @deprecated use `CreateProjectAPIProblem$Outbound` instead. */
  export type Outbound = CreateProjectAPIProblem$Outbound;
}

export function createProjectAPIProblemToJSON(
  createProjectAPIProblem: CreateProjectAPIProblem,
): string {
  return JSON.stringify(
    CreateProjectAPIProblem$outboundSchema.parse(createProjectAPIProblem),
  );
}

export function createProjectAPIProblemFromJSON(
  jsonString: string,
): SafeParseResult<CreateProjectAPIProblem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateProjectAPIProblem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateProjectAPIProblem' from JSON`,
  );
}

/** @internal */
export const CreateProjectBrandingRemoval$inboundSchema: z.ZodType<
  CreateProjectBrandingRemoval,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.boolean(),
});

/** @internal */
export type CreateProjectBrandingRemoval$Outbound = {
  value: boolean;
};

/** @internal */
export const CreateProjectBrandingRemoval$outboundSchema: z.ZodType<
  CreateProjectBrandingRemoval$Outbound,
  z.ZodTypeDef,
  CreateProjectBrandingRemoval
> = z.object({
  value: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateProjectBrandingRemoval$ {
  /** @deprecated use `CreateProjectBrandingRemoval$inboundSchema` instead. */
  export const inboundSchema = CreateProjectBrandingRemoval$inboundSchema;
  /** @deprecated use `CreateProjectBrandingRemoval$outboundSchema` instead. */
  export const outboundSchema = CreateProjectBrandingRemoval$outboundSchema;
  /** @deprecated use `CreateProjectBrandingRemoval$Outbound` instead. */
  export type Outbound = CreateProjectBrandingRemoval$Outbound;
}

export function createProjectBrandingRemovalToJSON(
  createProjectBrandingRemoval: CreateProjectBrandingRemoval,
): string {
  return JSON.stringify(
    CreateProjectBrandingRemoval$outboundSchema.parse(
      createProjectBrandingRemoval,
    ),
  );
}

export function createProjectBrandingRemovalFromJSON(
  jsonString: string,
): SafeParseResult<CreateProjectBrandingRemoval, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateProjectBrandingRemoval$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateProjectBrandingRemoval' from JSON`,
  );
}

/** @internal */
export const CreateProjectEntitlements$inboundSchema: z.ZodType<
  CreateProjectEntitlements,
  z.ZodTypeDef,
  unknown
> = z.object({
  brandingRemoval: z.lazy(() => CreateProjectBrandingRemoval$inboundSchema)
    .optional(),
});

/** @internal */
export type CreateProjectEntitlements$Outbound = {
  brandingRemoval?: CreateProjectBrandingRemoval$Outbound | undefined;
};

/** @internal */
export const CreateProjectEntitlements$outboundSchema: z.ZodType<
  CreateProjectEntitlements$Outbound,
  z.ZodTypeDef,
  CreateProjectEntitlements
> = z.object({
  brandingRemoval: z.lazy(() => CreateProjectBrandingRemoval$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateProjectEntitlements$ {
  /** @deprecated use `CreateProjectEntitlements$inboundSchema` instead. */
  export const inboundSchema = CreateProjectEntitlements$inboundSchema;
  /** @deprecated use `CreateProjectEntitlements$outboundSchema` instead. */
  export const outboundSchema = CreateProjectEntitlements$outboundSchema;
  /** @deprecated use `CreateProjectEntitlements$Outbound` instead. */
  export type Outbound = CreateProjectEntitlements$Outbound;
}

export function createProjectEntitlementsToJSON(
  createProjectEntitlements: CreateProjectEntitlements,
): string {
  return JSON.stringify(
    CreateProjectEntitlements$outboundSchema.parse(createProjectEntitlements),
  );
}

export function createProjectEntitlementsFromJSON(
  jsonString: string,
): SafeParseResult<CreateProjectEntitlements, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateProjectEntitlements$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateProjectEntitlements' from JSON`,
  );
}

/** @internal */
export const CreateProjectProject$inboundSchema: z.ZodType<
  CreateProjectProject,
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
  entitlements: z.lazy(() => CreateProjectEntitlements$inboundSchema)
    .optional(),
});

/** @internal */
export type CreateProjectProject$Outbound = {
  id: string;
  name: string;
  appName: string;
  orgId?: string | undefined;
  createTime: string;
  updateTime?: string | undefined;
  entitlements?: CreateProjectEntitlements$Outbound | undefined;
};

/** @internal */
export const CreateProjectProject$outboundSchema: z.ZodType<
  CreateProjectProject$Outbound,
  z.ZodTypeDef,
  CreateProjectProject
> = z.object({
  id: z.string(),
  name: z.string(),
  appName: z.string(),
  orgId: z.string().optional(),
  createTime: z.date().transform(v => v.toISOString()),
  updateTime: z.date().transform(v => v.toISOString()).optional(),
  entitlements: z.lazy(() => CreateProjectEntitlements$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateProjectProject$ {
  /** @deprecated use `CreateProjectProject$inboundSchema` instead. */
  export const inboundSchema = CreateProjectProject$inboundSchema;
  /** @deprecated use `CreateProjectProject$outboundSchema` instead. */
  export const outboundSchema = CreateProjectProject$outboundSchema;
  /** @deprecated use `CreateProjectProject$Outbound` instead. */
  export type Outbound = CreateProjectProject$Outbound;
}

export function createProjectProjectToJSON(
  createProjectProject: CreateProjectProject,
): string {
  return JSON.stringify(
    CreateProjectProject$outboundSchema.parse(createProjectProject),
  );
}

export function createProjectProjectFromJSON(
  jsonString: string,
): SafeParseResult<CreateProjectProject, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateProjectProject$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateProjectProject' from JSON`,
  );
}

/** @internal */
export const CreateProjectResponse$inboundSchema: z.ZodType<
  CreateProjectResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => CreateProjectProject$inboundSchema),
  z.lazy(() => CreateProjectAPIProblem$inboundSchema),
]);

/** @internal */
export type CreateProjectResponse$Outbound =
  | CreateProjectProject$Outbound
  | CreateProjectAPIProblem$Outbound;

/** @internal */
export const CreateProjectResponse$outboundSchema: z.ZodType<
  CreateProjectResponse$Outbound,
  z.ZodTypeDef,
  CreateProjectResponse
> = z.union([
  z.lazy(() => CreateProjectProject$outboundSchema),
  z.lazy(() => CreateProjectAPIProblem$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateProjectResponse$ {
  /** @deprecated use `CreateProjectResponse$inboundSchema` instead. */
  export const inboundSchema = CreateProjectResponse$inboundSchema;
  /** @deprecated use `CreateProjectResponse$outboundSchema` instead. */
  export const outboundSchema = CreateProjectResponse$outboundSchema;
  /** @deprecated use `CreateProjectResponse$Outbound` instead. */
  export type Outbound = CreateProjectResponse$Outbound;
}

export function createProjectResponseToJSON(
  createProjectResponse: CreateProjectResponse,
): string {
  return JSON.stringify(
    CreateProjectResponse$outboundSchema.parse(createProjectResponse),
  );
}

export function createProjectResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateProjectResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateProjectResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateProjectResponse' from JSON`,
  );
}
