import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import getLinkByCode from "@/data/getLinkByCode";

type RouteContext = { params: Promise<{ shortcode: string }> };

export async function GET(_req: NextRequest, ctx: RouteContext) {
  const { shortcode } = await ctx.params;
  const link = await getLinkByCode(shortcode);

  if (!link) {
    return new Response("Not found", { status: 404 });
  }

  return NextResponse.redirect(link.url, { status: 302 });
}
