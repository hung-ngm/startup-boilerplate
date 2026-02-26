"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute inset-0 -z-10 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-4 py-2 backdrop-blur">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Production-ready startup boilerplate</span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Ship Your SaaS in
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              {" "}
              Days, Not Months
            </span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
            Everything you need to launch a modern SaaS application. Authentication, payments, analytics, AI chat, and
            more—all pre-configured and ready to deploy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/sign-up">
              <Button size="lg" className="group">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/#features">
              <Button size="lg" variant="outline">
                Explore Features
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary to-purple-600" />
                ))}
              </div>
              <span>500+ developers building</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
