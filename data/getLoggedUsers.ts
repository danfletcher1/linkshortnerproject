import { clerkClient } from "@clerk/nextjs/server";

export default async function getLoggedUsers() {
  const client = await clerkClient();
  const res = await client.users.getUserList({ limit: 100 });

  const users = Array.isArray(res)
    ? res
    : (res as any).data ?? (res as any).users ?? (res as any).results ?? (res as any).value ?? [];

  return (users as any[]).map((u: any) => ({
    id: u.id,
    firstName: u.firstName ?? null,
    lastName: u.lastName ?? null,
    email: u.emailAddresses?.[0]?.emailAddress ?? null,
    imageUrl: u.profileImageUrl ?? null,
  }));
}
