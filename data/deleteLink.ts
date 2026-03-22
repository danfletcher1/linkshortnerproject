import db from "@/db";
import { links } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export default async function deleteLink(id: string, userId: string) {
  await db
    .delete(links)
    .where(and(eq(links.id, id), eq(links.userId, userId)));
}
