import Stripe from "stripe";
import { env } from "@/env";

export const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-12-18.acacia",
  typescript: true,
});

export const stripeProducts = {
  free: {
    name: "Free",
    price: 0,
    priceId: "",
    features: [
      "Basic analytics",
      "Up to 100 API calls/month",
      "Email support",
      "Community access",
    ],
  },
  pro: {
    name: "Pro",
    price: 29,
    priceId: process.env.STRIPE_PRO_PRICE_ID || "",
    features: [
      "Advanced analytics",
      "Unlimited API calls",
      "Priority support",
      "All integrations",
      "Custom workflows",
      "Team collaboration",
    ],
  },
  enterprise: {
    name: "Enterprise",
    price: 99,
    priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID || "",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
      "Advanced security",
      "Unlimited team members",
    ],
  },
};
