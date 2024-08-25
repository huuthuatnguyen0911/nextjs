import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePaths = ["/me"];
const authPaths = ["/login", "/register"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get("sessionToken")?.value;
  console.log(request.nextUrl.pathname);
  if (privatePaths.includes(pathname) && !sessionToken) {
    return NextResponse.redirect(new URL("/login", request.nextUrl).toString());
  }
  if (authPaths.includes(pathname) && sessionToken) {
    return NextResponse.redirect(new URL("/me", request.nextUrl).toString());
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: privatePaths.concat(authPaths),
};
