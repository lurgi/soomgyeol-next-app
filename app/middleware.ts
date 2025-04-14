import { NextResponse } from "next/server";

export async function middleware() {
  if (process.env.NODE_ENV === "development") {
    const { server } = await import("@/mocks/server");
    server.listen({ onUnhandledRequest: "bypass" });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
