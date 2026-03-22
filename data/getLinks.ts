import db from "@/db";
import { links } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export default async function getLinks(limit = 50, userId?: string) {
  let query: any = db.select().from(links);

  if (userId) {
    query = query.where(eq(links.userId, userId));
  }

  const rows = await query.limit(limit).orderBy(desc(links.updatedAt));

  return rows.map((r: any) => ({
    id: r.id,
    code: r.code,
    url: r.url,
    userId: r.userId,
    createdAt: r.createdAt,
    updatedAt: r.updatedAt,
  }));
}
