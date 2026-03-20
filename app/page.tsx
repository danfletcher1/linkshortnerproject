import Link from "next/link";
import {
  LinkIcon,
  BarChart3,
  Zap,
  Shield,
  Globe,
  MousePointerClick,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    icon: LinkIcon,
    title: "Instant Link Shortening",
    description:
      "Transform any long URL into a clean, shareable short link in seconds. No sign-up required to get started.",
  },
  {
    icon: BarChart3,
    title: "Click Analytics (Coming Soon)",
    description:
      "Soon you'll be able to track every click on your short links — see visits, timestamps, and referral sources.",
  },
  {
    icon: MousePointerClick,
    title: "Custom Aliases",
    description:
      "Create branded short links with your own custom alias to make them memorable and recognizable.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built on a high-performance serverless infrastructure so your redirects happen in milliseconds, every time.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Your links stay active and reliable around the clock. Malicious-link scanning is coming soon to keep your audience safe.",
  },
  {
    icon: Globe,
    title: "Dashboard Management",
    description:
      "Manage all your shortened links from one place. Edit, disable, or delete links whenever you need to.",
  },
];

const steps = [
  { step: "1", title: "Paste your URL", description: "Drop your long link into the input field." },
  { step: "2", title: "Get your short link", description: "We generate a unique short URL instantly." },
  { step: "3", title: "Share & track", description: "Share the link and watch the analytics roll in." },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-6 px-4 pt-20 pb-16 w-full max-w-3xl mx-auto">
        <Badge variant="secondary" className="text-sm px-3 py-1">
          Free to use · No credit card required
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Shorten links.{" "}
          <span className="text-muted-foreground">Track results.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          The simplest way to create short, powerful links and understand how
          your audience engages with them.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Button asChild size="lg" className="px-8">
            <Link href="/dashboard">Get started free</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8">
            <Link href="/dashboard">View dashboard</Link>
          </Button>
        </div>
      </section>

      <Separator className="max-w-4xl w-full mx-auto" />

      {/* Features */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Everything you need to manage your links
          </h2>
          <p className="mt-3 text-muted-foreground">
            Powerful features designed to make link management effortless.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-muted">
                    <Icon className="size-5 text-foreground" />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="max-w-4xl w-full mx-auto" />

      {/* How it works */}
      <section className="w-full max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10">
          How it works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map(({ step, title, description }) => (
            <div key={step} className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center size-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                {step}
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-muted/50 border-t">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center flex flex-col items-center gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Ready to shorten your first link?
          </h2>
          <p className="text-muted-foreground">
            Sign up in seconds and start managing your links today.
          </p>
          <Button asChild size="lg" className="px-10">
            <Link href="/dashboard">Start for free</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
