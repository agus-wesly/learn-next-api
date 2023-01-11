import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  //Check if the cookie is available
  const cookie = request.cookies.get("auth");

  if (!cookie) return NextResponse.redirect(new URL("/", request.url));

  return response;

  // return NextResponse.redirect(new URL('/about-2', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin"],
};
