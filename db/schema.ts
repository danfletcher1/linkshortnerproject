import { pgTable, text, timestamp, index } from "drizzle-orm/pg-core";

export const links = pgTable(
  "links",
  {
    id: text("id").primaryKey(),
    code: text("code").notNull().unique(),
    url: text("url").notNull(),
    userId: text("user_id").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [index("links_code_idx").on(table.code)],
);
