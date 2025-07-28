import createMiddleware from "next-intl/middleware";

import { cookies } from "next/headers";
import { routing } from "./i18n/routing";
import { KEY_TOKEN } from "./constants/app.const";
import { PUBLIC_PAGES } from "./constants/path.const";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const defaultLocale = request.headers.get("x-your-custom-locale") || "en";

  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");

  const isPublicPage = PUBLIC_PAGES.some(item => {
    return (
      pathWithoutLocale === item || // exact match
      pathWithoutLocale.startsWith(`${item}/`) // match subpaths
    );
  });

  const cookie = await cookies();
  const token = cookie.get(KEY_TOKEN);

  if (!isPublicPage && !token) {
    return NextResponse.redirect(new URL("/", request.nextUrl.origin)); // TODO: Update when implement new language
  }

  const handleI18nRouting = createMiddleware(routing);

  const response = handleI18nRouting(request);
  response.headers.set("x-your-custom-locale", defaultLocale);

  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|dapp-service|_vercel|.*\\..*).*)",
};
