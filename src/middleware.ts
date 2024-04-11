import createMiddleware from "next-intl/middleware"
import { localePrefix, locales } from "./i18n"

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  localePrefix,

  // Used when no locale matches
  defaultLocale: "vi",
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
