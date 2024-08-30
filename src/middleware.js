import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;

  const privatePaths = ["/setting", "/appointment", "/business-dashboard"];

  const publicPath = [
    "/auth/login",
    "/auth/user",
    "/auth/business",
    "/auth/forgot-password",
    "/auth/verify-otp",
    "/auth/reset-password",
  ];

  const isPrivatePath = privatePaths.includes(path);
  const isPublicPath = publicPath.includes(path);

  const token = request.cookies.get("accessToken")?.value;

  if (isPrivatePath && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    "/setting",
    "/appointment",
    "/business-dashboard",
    "/auth/login",
    "/auth/user",
    "/auth/business",
    "/auth/forgot-password",
    "/auth/verify-otp",
    "/auth/reset-password",
  ],
};
