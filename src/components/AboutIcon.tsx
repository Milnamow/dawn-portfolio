// components/CoinIcon.tsx
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface AboutIconProps {
  src: string;
  alt: string;
  size?: number; // diameter in px
  className?: string;
  invertInDark?: boolean;
}

export function AboutIcon({ src, alt, size = 80, className, invertInDark = true }: AboutIconProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "flex",
              className
            )}
            style={{ width: `${size}px`, height: `${size}px` }}
          >
            <Image
              src={src}
              alt={alt}
              width={size}
              height={size}
              className={cn(
                "object-contain",
                invertInDark && "dark:invert"
              )}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>{alt}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}