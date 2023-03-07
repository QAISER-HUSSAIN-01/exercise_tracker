import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { url } from "./src/utils/url";
export const config = {
  matcher: ["/dashboard/:path*"],
};

export function middleware(req: NextRequest, res: NextResponse) {
  const token = req.cookies.get("token")?.value;
  if (token) {
    NextResponse.redirect(`${url}dashboard`);
  } else {
    return NextResponse.redirect(`${url}signin`);
  }
  NextResponse.next();
}
