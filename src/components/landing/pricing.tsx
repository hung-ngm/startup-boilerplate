"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: { stripe: 0, lemon: 0 },
    description: "Perfect for getting started",
    features: [
      "Basic analytics",
      "Up to 100 API calls/month",
      "Email support",
      "Community access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: { stripe: 29, lemon: 29 },
    description: "For serious builders",
    features: [
      "Advanced analytics",
      "Unlimited API calls",
      "Priority support",
      "All integrations",
      "Custom workflows",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { stripe: 99, lemon: 99 },
    description: "For scaling companies",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
      "Advanced security",
      "Unlimited team members",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  const [provider, setProvider] = useState<"stripe" | "lemon">("stripe");

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Choose the plan that works for you. All plans include a 14-day free trial.
          </p>

          {/* Payment Provider Toggle */}
          <div className="inline-flex rounded-lg border border-border/40 bg-background/60 p-1 backdrop-blur">
            <button
              onClick={() => setProvider("stripe")}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                provider === "stripe" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Stripe
            </button>
            <button
              onClick={() => setProvider("lemon")}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                provider === "lemon" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Lemon Squeezy
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.popular ? "border-primary shadow-lg" : "border-border/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="px-3 py-1">Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price[provider]}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/sign-up" className="w-full">
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
