"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-purple-600" />
          <span className="text-xl font-bold">StartupKit</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center space-x-6 md:flex">
          <Link href="/#features" className="text-sm font-medium hover:text-primary">
            Features
          </Link>
          <Link href="/#pricing" className="text-sm font-medium hover:text-primary">
            Pricing
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link>
          <Link href="/sign-in">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/sign-up">
            <Button>Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="border-t border-border/40 md:hidden">
          <div className="container space-y-4 py-4">
            <Link href="/#features" className="block text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="/#pricing" className="block text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="/blog" className="block text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <div className="flex flex-col space-y-2">
              <Link href="/sign-in">
                <Button variant="ghost" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
