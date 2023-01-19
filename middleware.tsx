import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  //Check if the cookie is available
  const token = request.cookies.get("auth")?.value;

  if (!token) return NextResponse.redirect(new URL("/auth", request.url));

  //Verify JWT
  try {
    await jwtVerify(token, new TextEncoder().encode("dshdshdsh"));

    return response;
  } catch (err) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
}

export const config = {
  matcher: ["/admin"],
};
