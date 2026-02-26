"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";
import { env } from "@/env";

if (typeof window !== "undefined") {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
    capture_pageview: false,
  });
}

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Track pageviews
    const handleRouteChange = () => posthog?.capture("$pageview");
    handleRouteChange();
  }, []);

  return (
    <ClerkProvider>
      <PostHogProvider client={posthog}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </PostHogProvider>
    </ClerkProvider>
  );
}
