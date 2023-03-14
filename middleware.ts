import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { url } from "./src/utils/url";

export const config = {
  matcher: ["/dashboard/:path*"],
};

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  console.log("next url", req.nextUrl.origin);
  console.log("url", req.url);
  // if (!token) {
  //   return NextResponse.rewrite(new URL("/signin", req.url));
  // }
  // return NextResponse.rewrite(req.url);
  if (token) {
    return NextResponse.next();
  }else{
    return NextResponse.redirect(new URL('/signin',req.url));
  }
}
