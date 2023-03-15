import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
// import { url } from "./src/utils/url";

export const config = {
  matcher: ["/dashboard/:path*"],
};

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  let url = req.nextUrl.clone();
  if(token === undefined){
    url.pathname = '/signin';
    return NextResponse.redirect(url);
  }
  NextResponse.redirect(url);
  return NextResponse.next();
}
