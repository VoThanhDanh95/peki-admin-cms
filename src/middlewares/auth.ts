import * as appConfig from "@shared/config/config"
import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest,
} from "next/server"
import { CustomMiddleware, MiddlewareFactory } from "./chainMiddlewares"
import { i18n } from "../../i18n-config"
import { getLocale } from "./lang"

export const withAuth: MiddlewareFactory = (middleware: CustomMiddleware) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const currentUser = request.cookies.get(
      appConfig.default.pekiAccessToken,
    )?.value

    const pathname = request.nextUrl.pathname
    const locale = getLocale(request)
    
    //TODO: locale urls
    if (
      !currentUser && 
      i18n.locales.every(
        (locale) =>
          !pathname.startsWith(`/${locale}/login`) && 
          !pathname.startsWith(`/login`) && 
          !pathname.startsWith(`/${locale}/root_admin/create`) &&
          !pathname.startsWith(`/root_admin/create`)
      )
    ) {      
      return NextResponse.redirect(new URL(`/login`, request.url))
    }
    
    return middleware(request, event, NextResponse.next())
  }
}
