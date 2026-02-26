import { describe, it, expect } from "vitest";
import { cn, formatDate, absoluteUrl } from "@/lib/utils";

describe("Utils", () => {
  describe("cn", () => {
    it("should merge class names", () => {
      const result = cn("text-red-500", "bg-blue-500");
      expect(result).toContain("text-red-500");
      expect(result).toContain("bg-blue-500");
    });

    it("should handle conditional classes", () => {
      const result = cn("base", true && "conditional", false && "excluded");
      expect(result).toContain("base");
      expect(result).toContain("conditional");
      expect(result).not.toContain("excluded");
    });
  });

  describe("formatDate", () => {
    it("should format date correctly", () => {
      const date = new Date("2024-02-01");
      const formatted = formatDate(date);
      expect(formatted).toMatch(/February \d+, 2024/);
    });
  });

  describe("absoluteUrl", () => {
    it("should return absolute URL", () => {
      const result = absoluteUrl("/test");
      expect(result).toContain("/test");
    });
  });
});
