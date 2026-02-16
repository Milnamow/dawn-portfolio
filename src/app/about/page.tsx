import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Dawn Milnamow",
  description: "Information about Dawn Milnamow",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="space-y-6 md:space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About me
          </h1>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Frontend developer passionate about performance, accessibility and clean code.
          </p>
        </div>

        <Separator />

      </div>
    </main>
  );
}