import { currentUser } from "@clerk/nextjs/server";
import CreateLinkButton from "./CreateLinkButton";
import LinkItem from "./LinkItem";

export default async function DashboardPage() {
  const [{ default: getLinks }] = await Promise.all([
    import("@/data/getLinks"),
  ]);

  const user = await currentUser();

  const links = await getLinks(50, user?.id);

  return (
    <main className="w-full px-4 py-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <CreateLinkButton />
      </div>

      <section className="mb-8">
        <h2 className="text-lg font-medium mb-3">Your recent links</h2>
        {links.length === 0 ? (
          <p className="text-sm text-muted-foreground">No links found.</p>
        ) : (
          <ul className="space-y-3">
            {links.map((l: any) => (
              <LinkItem
                key={l.id}
                link={{
                  id: l.id,
                  code: l.code,
                  url: l.url,
                  createdAt: new Date(l.createdAt).toISOString(),
                }}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
