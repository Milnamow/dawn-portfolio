"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ProfileAvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function ProfileAvatar({
  src,
  alt,
  size = "md",
  className,
}: ProfileAvatarProps) {
  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-32 w-32 md:h-40 md:w-40",
    lg: "h-48 w-48 md:h-64 md:w-64",
    xl: "h-80 w-80 md:h-112 md:w-112"
  }[size];

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:opacity-50",
        sizeClasses,
        className
      )}
    >
      <Avatar className="h-full w-full">
        <AvatarImage src={src} alt={alt} className="object-cover" />
        <AvatarFallback>{alt.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>

      <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primary/60 transition-all duration-500" />
    </div>
  );
}