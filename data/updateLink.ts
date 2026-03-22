import db from "@/db";
import { links } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export interface UpdateLinkInput {
  id: string;
  code: string;
  url: string;
  userId: string;
}

export default async function updateLink(input: UpdateLinkInput) {
  const [row] = await db
    .update(links)
    .set({
      code: input.code,
      url: input.url,
      updatedAt: new Date(),
    })
    .where(and(eq(links.id, input.id), eq(links.userId, input.userId)))
    .returning();

  return row;
}
