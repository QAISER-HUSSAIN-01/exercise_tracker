import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
// import { url } from "./src/utils/url";

export const config = {
  matcher: ["/dashboard/:path*"],
};

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (token === undefined) {
    // return NextResponse.redirect('/signin');
    return NextResponse.rewrite(new URL('/signin', req.url));
  } else {
    return NextResponse.rewrite(new URL(req.url, req.url));
    //  NextResponse.next();
  }
  // return NextResponse.next();
}
