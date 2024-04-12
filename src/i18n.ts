import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"
import { isOneOf } from "@shared/helpers/typeGuards"

// Can be imported from a shared config
export const locales = ["vi"] as const

export const localePrefix = "as-needed" as const

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!isOneOf(locales)(locale)) notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
