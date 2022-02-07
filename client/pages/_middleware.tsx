import { NextResponse, NextRequest } from "next/server";
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/cards") {
    return NextResponse.redirect("/cards/debit_cards");
  }

  if (pathname === "/") {
    return NextResponse.redirect("/cards");
  }
  return NextResponse.next();
}
