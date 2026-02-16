"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";        // or any icon library
import { ThemeToggle } from "./ThemeToggle";
import { SocialLinks } from "./SocialLinks";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
//   { href: "/services", label: "Services" },
//   { href: "/portfolio", label: "Portfolio" }
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <Link href="/" className="font-bold tracking-tight">
            <span>DawnMilnamow</span>
          </Link>
          <SocialLinks />
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground/80",
                  isActive ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)} // close sheet on click
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-foreground/80",
                    pathname === item.href ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="p-4 border-t mt-auto">
              <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium">Theme</span>
              <ThemeToggle size="lg" />
            </div>
          </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}