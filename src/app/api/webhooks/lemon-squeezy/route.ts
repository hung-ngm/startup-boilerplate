import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import crypto from "crypto";
import { db } from "@/lib/db";
import { subscriptions } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { env } from "@/env";

function verifySignature(payload: string, signature: string): boolean {
  const hmac = crypto.createHmac("sha256", env.LEMONSQUEEZY_WEBHOOK_SECRET);
  const digest = hmac.update(payload).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = (await headers()).get("x-signature");

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  if (!verifySignature(body, signature)) {
    console.error("Webhook signature verification failed");
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    const event = JSON.parse(body);
    const { meta, data } = event;

    switch (meta.event_name) {
      case "subscription_created":
      case "subscription_updated": {
        const subscription = data.attributes;
        
        await db
          .insert(subscriptions)
          .values({
            userId: subscription.user_id,
            provider: "lemonsqueezy",
            subscriptionId: data.id,
            customerId: subscription.customer_id.toString(),
            priceId: subscription.variant_id.toString(),
            status: subscription.status,
            currentPeriodStart: new Date(subscription.renews_at || subscription.created_at),
            currentPeriodEnd: new Date(subscription.renews_at || subscription.ends_at),
            cancelAtPeriodEnd: subscription.cancelled,
          })
          .onConflictDoUpdate({
            target: subscriptions.subscriptionId,
            set: {
              status: subscription.status,
              currentPeriodStart: new Date(subscription.renews_at || subscription.created_at),
              currentPeriodEnd: new Date(subscription.renews_at || subscription.ends_at),
              cancelAtPeriodEnd: subscription.cancelled,
              updatedAt: new Date(),
            },
          });
        break;
      }

      case "subscription_cancelled": {
        await db
          .update(subscriptions)
          .set({
            status: "canceled",
            cancelAtPeriodEnd: true,
            updatedAt: new Date(),
          })
          .where(eq(subscriptions.subscriptionId, data.id));
        break;
      }

      default:
        console.log(`Unhandled event: ${meta.event_name}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook handler error:", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
