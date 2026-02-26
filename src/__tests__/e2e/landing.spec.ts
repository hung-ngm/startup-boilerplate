import { test, expect } from "@playwright/test";

test.describe("Landing Page", () => {
  test("should display hero section", async ({ page }) => {
    await page.goto("/");
    
    await expect(page.getByRole("heading", { name: /Ship Your SaaS/i })).toBeVisible();
    await expect(page.getByText(/Everything you need to launch/i)).toBeVisible();
  });

  test("should have working navigation", async ({ page }) => {
    await page.goto("/");
    
    await page.getByRole("link", { name: /Features/i }).first().click();
    await expect(page).toHaveURL(/#features/);
    
    await page.goto("/");
    await page.getByRole("link", { name: /Pricing/i }).first().click();
    await expect(page).toHaveURL(/#pricing/);
  });

  test("should display features section", async ({ page }) => {
    await page.goto("/#features");
    
    await expect(page.getByText(/Clerk Authentication/i)).toBeVisible();
    await expect(page.getByText(/Stripe & Lemon Squeezy/i)).toBeVisible();
  });

  test("should display pricing section", async ({ page }) => {
    await page.goto("/#pricing");
    
    await expect(page.getByText(/Free/i)).toBeVisible();
    await expect(page.getByText(/Pro/i)).toBeVisible();
    await expect(page.getByText(/Enterprise/i)).toBeVisible();
  });

  test("should have CTA buttons", async ({ page }) => {
    await page.goto("/");
    
    const getStartedButton = page.getByRole("link", { name: /Get Started/i }).first();
    await expect(getStartedButton).toBeVisible();
    await expect(getStartedButton).toHaveAttribute("href", "/sign-up");
  });
});
