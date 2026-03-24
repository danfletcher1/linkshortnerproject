import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TestPage() {
  return (
    <main className="w-full px-4 py-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Test Page</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">This is the test page.</p>
        </CardContent>
      </Card>
    </main>
  );
}
