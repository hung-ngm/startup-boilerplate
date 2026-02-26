import { PostHog } from "posthog-node";
import { env } from "@/env";

export const posthogClient = new PostHog(env.POSTHOG_API_KEY, {
  host: env.NEXT_PUBLIC_POSTHOG_HOST,
});
