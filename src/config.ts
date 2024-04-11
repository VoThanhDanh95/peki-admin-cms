import { z } from "zod"

const schema = z
  .object({
    DATABASE_URL: z.string().min(1),
    COOKIE_SECRET: z.string().min(1),
    PEKI_ACCESS_TOKEN: z.string().min(1),
  })
  .transform((config) => ({
    databaseUrl: config.DATABASE_URL,
    cookieSecret: config.COOKIE_SECRET,
    pekiAccessToken: config.PEKI_ACCESS_TOKEN,
  }))

type Config = z.infer<typeof schema>

const config: Config = schema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  COOKIE_SECRET: process.env.COOKIE_SECRET,
  PEKI_ACCESS_TOKEN: process.env.PEKI_ACCESS_TOKEN,
})

export default config
