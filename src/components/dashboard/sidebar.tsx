"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, MessageSquare, CreditCard, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const routes = [
  {
    label: "Overview",
    icon: Home,
    href: "/dashboard",
  },
  {
    label: "AI Chat",
    icon: MessageSquare,
    href: "/dashboard/chat",
  },
  {
    label: "Billing",
    icon: CreditCard,
    href: "/dashboard/billing",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-40 md:hidden"
        onClick={() => setCollapsed(!collapsed)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 z-30 flex h-full flex-col border-r bg-background transition-all duration-300",
          collapsed ? "-translate-x-full md:w-16" : "w-64"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center border-b px-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-purple-600" />
            {!collapsed && <span className="text-xl font-bold">StartupKit</span>}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === route.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              <route.icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{route.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Collapse Button (Desktop) */}
        <div className="hidden border-t p-4 md:block">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="w-full justify-start"
          >
            {collapsed ? "Expand" : "Collapse"}
          </Button>
        </div>
      </div>
    </>
  );
}
