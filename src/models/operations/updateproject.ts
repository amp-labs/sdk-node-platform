/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The project fields to update. (Only include the fields you'd like to update.)
 */
export type Project = {
  /**
   * The app name.
   */
  appName?: string | undefined;
  /**
   * The project name.
   */
  name?: string | undefined;
};

export type UpdateProjectRequestBody = {
  updateMask: Array<string>;
  /**
   * The project fields to update. (Only include the fields you'd like to update.)
   */
  project: Project;
};

export type UpdateProjectRequest = {
  /**
   * The Ampersand project ID or project name.
   */
  projectIdOrName: string;
  requestBody: UpdateProjectRequestBody;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type UpdateProjectAPIProblem = {
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
export type UpdateProjectBrandingRemoval = {
  /**
   * Whether branding has been removed from the project.
   */
  value: boolean;
};

/**
 * The entitlements for the project.
 */
export type UpdateProjectEntitlements = {
  /**
   * Whether branding can be removed from the UI library.
   */
  brandingRemoval?: UpdateProjectBrandingRemoval | undefined;
};

/**
 * The updated project.
 */
export type UpdateProjectProject = {
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
  entitlements?: UpdateProjectEntitlements | undefined;
};

export type UpdateProjectResponse =
  | UpdateProjectProject
  | UpdateProjectAPIProblem;

/** @internal */
export const Project$inboundSchema: z.ZodType<Project, z.ZodTypeDef, unknown> =
  z.object({
    appName: z.string().optional(),
    name: z.string().optional(),
  });

/** @internal */
export type Project$Outbound = {
  appName?: string | undefined;
  name?: string | undefined;
};

/** @internal */
export const Project$outboundSchema: z.ZodType<
  Project$Outbound,
  z.ZodTypeDef,
  Project
> = z.object({
  appName: z.string().optional(),
  name: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Project$ {
  /** @deprecated use `Project$inboundSchema` instead. */
  export const inboundSchema = Project$inboundSchema;
  /** @deprecated use `Project$outboundSchema` instead. */
  export const outboundSchema = Project$outboundSchema;
  /** @deprecated use `Project$Outbound` instead. */
  export type Outbound = Project$Outbound;
}

export function projectToJSON(project: Project): string {
  return JSON.stringify(Project$outboundSchema.parse(project));
}

export function projectFromJSON(
  jsonString: string,
): SafeParseResult<Project, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Project$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Project' from JSON`,
  );
}

/** @internal */
export const UpdateProjectRequestBody$inboundSchema: z.ZodType<
  UpdateProjectRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  updateMask: z.array(z.string()),
  project: z.lazy(() => Project$inboundSchema),
});

/** @internal */
export type UpdateProjectRequestBody$Outbound = {
  updateMask: Array<string>;
  project: Project$Outbound;
};

/** @internal */
export const UpdateProjectRequestBody$outboundSchema: z.ZodType<
  UpdateProjectRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateProjectRequestBody
> = z.object({
  updateMask: z.array(z.string()),
  project: z.lazy(() => Project$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateProjectRequestBody$ {
  /** @deprecated use `UpdateProjectRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateProjectRequestBody$inboundSchema;
  /** @deprecated use `UpdateProjectRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateProjectRequestBody$outboundSchema;
  /** @deprecated use `UpdateProjectRequestBody$Outbound` instead. */
  export type Outbound = UpdateProjectRequestBody$Outbound;
}

export function updateProjectRequestBodyToJSON(
  updateProjectRequestBody: UpdateProjectRequestBody,
): string {
  return JSON.stringify(
    UpdateProjectRequestBody$outboundSchema.parse(updateProjectRequestBody),
  );
}

export function updateProjectRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateProjectRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateProjectRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateProjectRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateProjectRequest$inboundSchema: z.ZodType<
  UpdateProjectRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectIdOrName: z.string(),
  RequestBody: z.lazy(() => UpdateProjectRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateProjectRequest$Outbound = {
  projectIdOrName: string;
  RequestBody: UpdateProjectRequestBody$Outbound;
};

/** @internal */
export const UpdateProjectRequest$outboundSchema: z.ZodType<
  UpdateProjectRequest$Outbound,
  z.ZodTypeDef,
  UpdateProjectRequest
> = z.object({
  projectIdOrName: z.string(),
  requestBody: z.lazy(() => UpdateProjectRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateProjectRequest$ {
  /** @deprecated use `UpdateProjectRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateProjectRequest$inboundSchema;
  /** @deprecated use `UpdateProjectRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateProjectRequest$outboundSchema;
  /** @deprecated use `UpdateProjectRequest$Outbound` instead. */
  export type Outbound = UpdateProjectRequest$Outbound;
}

export function updateProjectRequestToJSON(
  updateProjectRequest: UpdateProjectRequest,
): string {
  return JSON.stringify(
    UpdateProjectRequest$outboundSchema.parse(updateProjectRequest),
  );
}

export function updateProjectRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateProjectRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateProjectRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateProjectRequest' from JSON`,
  );
}

/** @internal */
export const UpdateProjectAPIProblem$inboundSchema: z.ZodType<
  UpdateProjectAPIProblem,
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
export type UpdateProjectAPIProblem$Outbound = {
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
export const UpdateProjectAPIProblem$outboundSchema: z.ZodType<
  UpdateProjectAPIProblem$Outbound,
  z.ZodTypeDef,
  UpdateProjectAPIProblem
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
export namespace UpdateProjectAPIProblem$ {
  /** @deprecated use `UpdateProjectAPIProblem$inboundSchema` instead. */
  export const inboundSchema = UpdateProjectAPIProblem$inboundSchema;
  /** @deprecated use `UpdateProjectAPIProblem$outboundSchema` instead. */
  export const outboundSchema = UpdateProjectAPIProblem$outboundSchema;
  /** @deprecated use `UpdateProjectAPIProblem$Outbound` instead. */
  export type Outbound = UpdateProjectAPIProblem$Outbound;
}

export function updateProjectAPIProblemToJSON(
  updateProjectAPIProblem: UpdateProjectAPIProblem,
): string {
  return JSON.stringify(
    UpdateProjectAPIProblem$outboundSchema.parse(updateProjectAPIProblem),
  );
}

export function updateProjectAPIProblemFromJSON(
  jsonString: string,
): SafeParseResult<UpdateProjectAPIProblem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateProjectAPIProblem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateProjectAPIProblem' from JSON`,
  );
}

/** @internal */
export const UpdateProjectBrandingRemoval$inboundSchema: z.ZodType<
  UpdateProjectBrandingRemoval,
  z.ZodTypeDef,
  unknown
> = z.object({
  value: z.boolean(),
});

/** @internal */
export type UpdateProjectBrandingRemoval$Outbound = {
  value: boolean;
};

/** @internal */
export const UpdateProjectBrandingRemoval$outboundSchema: z.ZodType<
  UpdateProjectBrandingRemoval$Outbound,
  z.ZodTypeDef,
  UpdateProjectBrandingRemoval
> = z.object({
  value: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateProjectBrandingRemoval$ {
  /** @deprecated use `UpdateProjectBrandingRemoval$inboundSchema` instead. */
  export const inboundSchema = UpdateProjectBrandingRemoval$inboundSchema;
  /** @deprecated use `UpdateProjectBrandingRemoval$outboundSchema` instead. */
  export const outboundSchema = UpdateProjectBrandingRemoval$outboundSchema;
  /** @deprecated use `UpdateProjectBrandingRemoval$Outbound` instead. */
  export type Outbound = UpdateProjectBrandingRemoval$Outbound;
}

export function updateProjectBrandingRemovalToJSON(
  updateProjectBrandingRemoval: UpdateProjectBrandingRemoval,
): string {
  return JSON.stringify(
    UpdateProjectBrandingRemoval$outboundSchema.parse(
      updateProjectBrandingRemoval,
    ),
  );
}

export function updateProjectBrandingRemovalFromJSON(
  jsonString: string,
): SafeParseResult<UpdateProjectBrandingRemoval, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateProjectBrandingRemoval$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateProjectBrandingRemoval' from JSON`,
  );
}

/** @internal */
export const UpdateProjectEntitlements$inboundSchema: z.ZodType<
  UpdateProjectEntitlements,
  z.ZodTypeDef,
  unknown
> = z.object({
  brandingRemoval: z.lazy(() => UpdateProjectBrandingRemoval$inboundSchema)
    .optional(),
});

/** @internal */
export type UpdateProjectEntitlements$Outbound = {
  brandingRemoval?: UpdateProjectBrandingRemoval$Outbound | undefined;
};

/** @internal */
export const UpdateProjectEntitlements$outboundSchema: z.ZodType<
  UpdateProjectEntitlements$Outbound,
  z.ZodTypeDef,
  UpdateProjectEntitlements
> = z.object({
  brandingRemoval: z.lazy(() => UpdateProjectBrandingRemoval$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateProjectEntitlements$ {
  /** @deprecated use `UpdateProjectEntitlements$inboundSchema` instead. */
  export const inboundSchema = UpdateProjectEntitlements$inboundSchema;
  /** @deprecated use `UpdateProjectEntitlements$outboundSchema` instead. */
  export const outboundSchema = UpdateProjectEntitlements$outboundSchema;
  /** @deprecated use `UpdateProjectEntitlements$Outbound` instead. */
  export type Outbound = UpdateProjectEntitlements$Outbound;
}

export function updateProjectEntitlementsToJSON(
  updateProjectEntitlements: UpdateProjectEntitlements,
): string {
  return JSON.stringify(
    UpdateProjectEntitlements$outboundSchema.parse(updateProjectEntitlements),
  );
}

export function updateProjectEntitlementsFromJSON(
  jsonString: string,
): SafeParseResult<UpdateProjectEntitlements, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateProjectEntitlements$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateProjectEntitlements' from JSON`,
  );
}

/** @internal */
export const UpdateProjectProject$inboundSchema: z.ZodType<
  UpdateProjectProject,
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
  entitlements: z.lazy(() => UpdateProjectEntitlements$inboundSchema)
    .optional(),
});

/** @internal */
export type UpdateProjectProject$Outbound = {
  id: string;
  name: string;
  appName: string;
  orgId?: string | undefined;
  createTime: string;
  updateTime?: string | undefined;
  entitlements?: UpdateProjectEntitlements$Outbound | undefined;
};

/** @internal */
export const UpdateProjectProject$outboundSchema: z.ZodType<
  UpdateProjectProject$Outbound,
  z.ZodTypeDef,
  UpdateProjectProject
> = z.object({
  id: z.string(),
  name: z.string(),
  appName: z.string(),
  orgId: z.string().optional(),
  createTime: z.date().transform(v => v.toISOString()),
  updateTime: z.date().transform(v => v.toISOString()).optional(),
  entitlements: z.lazy(() => UpdateProjectEntitlements$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateProjectProject$ {
  /** @deprecated use `UpdateProjectProject$inboundSchema` instead. */
  export const inboundSchema = UpdateProjectProject$inboundSchema;
  /** @deprecated use `UpdateProjectProject$outboundSchema` instead. */
  export const outboundSchema = UpdateProjectProject$outboundSchema;
  /** @deprecated use `UpdateProjectProject$Outbound` instead. */
  export type Outbound = UpdateProjectProject$Outbound;
}

export function updateProjectProjectToJSON(
  updateProjectProject: UpdateProjectProject,
): string {
  return JSON.stringify(
    UpdateProjectProject$outboundSchema.parse(updateProjectProject),
  );
}

export function updateProjectProjectFromJSON(
  jsonString: string,
): SafeParseResult<UpdateProjectProject, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateProjectProject$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateProjectProject' from JSON`,
  );
}

/** @internal */
export const UpdateProjectResponse$inboundSchema: z.ZodType<
  UpdateProjectResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => UpdateProjectProject$inboundSchema),
  z.lazy(() => UpdateProjectAPIProblem$inboundSchema),
]);

/** @internal */
export type UpdateProjectResponse$Outbound =
  | UpdateProjectProject$Outbound
  | UpdateProjectAPIProblem$Outbound;

/** @internal */
export const UpdateProjectResponse$outboundSchema: z.ZodType<
  UpdateProjectResponse$Outbound,
  z.ZodTypeDef,
  UpdateProjectResponse
> = z.union([
  z.lazy(() => UpdateProjectProject$outboundSchema),
  z.lazy(() => UpdateProjectAPIProblem$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateProjectResponse$ {
  /** @deprecated use `UpdateProjectResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateProjectResponse$inboundSchema;
  /** @deprecated use `UpdateProjectResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateProjectResponse$outboundSchema;
  /** @deprecated use `UpdateProjectResponse$Outbound` instead. */
  export type Outbound = UpdateProjectResponse$Outbound;
}

export function updateProjectResponseToJSON(
  updateProjectResponse: UpdateProjectResponse,
): string {
  return JSON.stringify(
    UpdateProjectResponse$outboundSchema.parse(updateProjectResponse),
  );
}

export function updateProjectResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateProjectResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateProjectResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateProjectResponse' from JSON`,
  );
}
