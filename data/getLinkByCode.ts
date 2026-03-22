import db from "@/db";
import { links } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function getLinkByCode(code: string) {
  const rows = await db.select().from(links).where(eq(links.code, code)).limit(1);
  return rows[0] ?? null;
}
