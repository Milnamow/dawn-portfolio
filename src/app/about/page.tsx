import { AboutIcon } from "@/components/AboutIcon";
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
            About
          </h1>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Full-stack developer passionate about performance, accessibility and clean code.
          </p>
        </div>

        <Separator />

        <div className="mb-16">
          <h2 className="mb-6 text-center text-2xl font-semibold">Tools I Use</h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <AboutIcon src="/icons/github.svg" alt="GitHub" size={80} />
            <AboutIcon src="/icons/react.svg" alt="React" size={80} invertInDark={false} />
            <AboutIcon src="/icons/typescript.svg" alt="TypeScript" size={80} invertInDark={false} />
            <AboutIcon src="/icons/next.svg" alt="Next.js" size={80} />
            <AboutIcon src="/icons/tailwindcss.svg" alt="Tailwind CSS" size={80} invertInDark={false} />
            <AboutIcon src="/icons/vercel.svg" alt="Vercel" size={80} />
          </div>
          <p className="mt-8 text-center text-muted-foreground">
              And more...
          </p>
        </div>

        <div>
          <h2 className="mb-6 text-center text-2xl font-semibold">A Bit About Me</h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <AboutIcon src="/icons/sealofdelaware.svg" alt="Delaware State Seal" size={100} invertInDark={false} />
            <AboutIcon src="/icons/sealofflorida.svg" alt="Florida State Seal" size={100} invertInDark={false} />
          </div>
          <p className="mt-8 text-center text-muted-foreground">
            Proudly connected to Delaware and Florida.
          </p>
        </div>
      </div>
    </main>
  );
}