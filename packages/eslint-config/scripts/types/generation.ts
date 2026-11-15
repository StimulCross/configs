import type { compile } from 'json-schema-to-typescript-lite'

export type Schema = Parameters<typeof compile>[0]
export interface Source { namespace: string, name: string, omitOptions?: Record<string, string>, rules: Record<string, { meta?: { schema?: unknown } | undefined }> }
export interface OmittedOptions { id: string, reason: string }
export interface GenerationResult { text: string, count: number, hash: string, omitted: OmittedOptions[] }
