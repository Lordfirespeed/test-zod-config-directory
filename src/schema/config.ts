import { z } from "zod";

export const configSchema = z.object({
  foo: z.string(),
  bar: z.number(),
  baz: z.object({
    qux: z.string(),
    corge: z.string(),
  })
})

export type Config = z.infer<typeof configSchema>
export type ConfigIn = z.input<typeof configSchema>
