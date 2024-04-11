import { withLocale } from "./middlewares/lang"
import { withAuth } from "./middlewares/auth"
import { chainMiddlewares } from "./middlewares/chainMiddlewares"

const middlewares = [withAuth, withLocale]

export default chainMiddlewares(middlewares)

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
