import {
  lemonSqueezySetup,
  getProduct,
  listProducts,
  createCheckout,
} from "@lemonsqueezy/lemonsqueezy.js";
import { env } from "@/env";

lemonSqueezySetup({
  apiKey: env.LEMONSQUEEZY_API_KEY,
  onError: (error) => {
    console.error("Lemon Squeezy Error:", error);
    throw error;
  },
});

export const lemonSqueezyProducts = {
  pro: {
    name: "Pro",
    price: 29,
    variantId: process.env.LEMONSQUEEZY_PRO_VARIANT_ID || "",
  },
  enterprise: {
    name: "Enterprise",
    price: 99,
    variantId: process.env.LEMONSQUEEZY_ENTERPRISE_VARIANT_ID || "",
  },
};

export { getProduct, listProducts, createCheckout };
