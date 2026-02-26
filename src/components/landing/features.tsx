import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  CreditCard,
  Mail,
  BarChart3,
  Bug,
  Database,
  MessageSquare,
  Zap,
  Users,
  FileText,
  TestTube,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Clerk Authentication",
    description: "Secure user authentication with social logins, MFA, and user management out of the box.",
  },
  {
    icon: CreditCard,
    title: "Stripe & Lemon Squeezy",
    description: "Dual payment provider support with subscription management and webhook handlers.",
  },
  {
    icon: Database,
    title: "Supabase + Drizzle ORM",
    description: "Type-safe database queries with Drizzle ORM on top of Supabase Postgres.",
  },
  {
    icon: MessageSquare,
    title: "AI Chat with RAG",
    description: "Pre-built AI chat interface using Vercel AI SDK, Pinecone vector DB, and OpenAI.",
  },
  {
    icon: Mail,
    title: "Transactional Emails",
    description: "Beautiful email templates with React Email and Resend integration.",
  },
  {
    icon: BarChart3,
    title: "PostHog Analytics",
    description: "Product analytics, session replay, and feature flags built-in.",
  },
  {
    icon: Bug,
    title: "Sentry Error Tracking",
    description: "Comprehensive error monitoring for client, server, and edge runtimes.",
  },
  {
    icon: Zap,
    title: "Upstash Redis",
    description: "Rate limiting middleware on API routes with Redis caching.",
  },
  {
    icon: Users,
    title: "Dark Mode",
    description: "Beautiful dark mode with next-themes, default dark with system preference support.",
  },
  {
    icon: FileText,
    title: "MDX Blog",
    description: "Fully featured blog with MDX support for rich content and code examples.",
  },
  {
    icon: TestTube,
    title: "Vitest + Playwright",
    description: "Complete testing setup with unit tests (Vitest) and E2E tests (Playwright).",
  },
  {
    icon: Workflow,
    title: "CI/CD Pipeline",
    description: "GitHub Actions workflow for linting, testing, and building on every push.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Everything You Need to Succeed</h2>
          <p className="text-lg text-muted-foreground">
            A complete stack with all the modern tools and services pre-integrated and configured.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/40 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
