import db from "@/db";
import { links } from "@/db/schema";

export interface CreateLinkInput {
  id: string;
  code: string;
  url: string;
  userId: string;
}

export default async function createLink(input: CreateLinkInput) {
  const [row] = await db
    .insert(links)
    .values({
      id: input.id,
      code: input.code,
      url: input.url,
      userId: input.userId,
    })
    .returning();

  return row;
}
