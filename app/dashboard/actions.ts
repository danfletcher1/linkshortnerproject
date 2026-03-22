"use server";

import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import createLink from "@/data/createLink";
import updateLink from "@/data/updateLink";
import deleteLink from "@/data/deleteLink";

const CreateLinkSchema = z.object({
  url: z.string().url("Please enter a valid URL"),
  code: z
    .string()
    .min(1, "Slug is required")
    .max(50, "Slug must be 50 characters or fewer")
    .regex(/^[a-zA-Z0-9_-]+$/, "Slug may only contain letters, numbers, hyphens, and underscores"),
});

export type CreateLinkInput = z.infer<typeof CreateLinkSchema>;

export async function createLinkAction(input: CreateLinkInput) {
  const { userId } = await auth();

  if (!userId) {
    return { error: "Unauthorized" };
  }

  const parsed = CreateLinkSchema.safeParse(input);
  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  try {
    const id = crypto.randomUUID();
    const link = await createLink({
      id,
      code: parsed.data.code,
      url: parsed.data.url,
      userId,
    });

    return { success: true, link };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to create link";
    if (message.includes("unique") || message.includes("duplicate")) {
      return { error: "That slug is already taken. Please choose another." };
    }
    return { error: "Failed to create link" };
  }
}

const LinkSlugSchema = z
  .string()
  .min(1, "Slug is required")
  .max(50, "Slug must be 50 characters or fewer")
  .regex(/^[a-zA-Z0-9_-]+$/, "Slug may only contain letters, numbers, hyphens, and underscores");

const UpdateLinkSchema = z.object({
  id: z.string().min(1, "Link ID is required"),
  url: z.string().url("Please enter a valid URL"),
  code: LinkSlugSchema,
});

export type UpdateLinkInput = z.infer<typeof UpdateLinkSchema>;

export async function updateLinkAction(input: UpdateLinkInput) {
  const { userId } = await auth();

  if (!userId) {
    return { error: "Unauthorized" };
  }

  const parsed = UpdateLinkSchema.safeParse(input);
  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  try {
    const link = await updateLink({
      id: parsed.data.id,
      code: parsed.data.code,
      url: parsed.data.url,
      userId,
    });

    if (!link) {
      return { error: "Link not found or you do not have permission to edit it." };
    }

    return { success: true, link };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to update link";
    if (message.includes("unique") || message.includes("duplicate")) {
      return { error: "That slug is already taken. Please choose another." };
    }
    return { error: "Failed to update link" };
  }
}

const DeleteLinkSchema = z.object({
  id: z.string().min(1, "Link ID is required"),
});

export type DeleteLinkInput = z.infer<typeof DeleteLinkSchema>;

export async function deleteLinkAction(input: DeleteLinkInput) {
  const { userId } = await auth();

  if (!userId) {
    return { error: "Unauthorized" };
  }

  const parsed = DeleteLinkSchema.safeParse(input);
  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  try {
    await deleteLink(parsed.data.id, userId);
    return { success: true };
  } catch {
    return { error: "Failed to delete link" };
  }
}
