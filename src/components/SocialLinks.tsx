"use client";

import { SiGithub, SiLinkedin } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className, iconSize = 20 }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        variant="ghost"
        size="icon"
        asChild
        aria-label="GitHub profile"
      >
        <a
          href="https://github.com/dawnmil" // ← update to your real GitHub
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub 
            title="GitHub" 
            className={`h-[${iconSize}px] w-[${iconSize}px]`} 
          />
        </a>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        asChild
        aria-label="LinkedIn profile"
      >
        <a
          href="https://www.linkedin.com/in/dawnmilnamow" // ← update to your real LinkedIn
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin 
            title="LinkedIn" 
            className={`h-[${iconSize}px] w-[${iconSize}px]`} 
          />
        </a>
      </Button>
    </div>
  );
}