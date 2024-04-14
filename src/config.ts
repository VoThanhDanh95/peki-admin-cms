import { z } from "zod"

const schema = z
  .object({
    DATABASE_URL: z.string().min(1),
    NEXTAUTH_SECRET: z.string().min(1),
  })
  .transform((config) => ({
    databaseUrl: config.DATABASE_URL,
    secret: config.NEXTAUTH_SECRET,
  }))

type Config = z.infer<typeof schema>

const config: Config = schema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
})

export default config
