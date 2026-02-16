import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Dawn Milnamow",
  description: "Web development, consulting, performance optimization, design systems.",
};

export default function ServicesPage() {
  return (
    <main className="container mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-10">Services</h1>

<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {/* Service cards – automatically become 1-column on mobile, 2 on sm, 3 on lg */}
  <div className="rounded-lg border bg-card p-6 shadow-sm">
    <h3 className="text-2xl font-semibold mb-3">Next.js Development</h3>
          <p className="text-muted-foreground">
            Full websites, SaaS apps, marketing sites, blogs — SSR, SSG, ISR, App Router.
          </p>
  </div>

<div className="rounded-lg border bg-card p-6 shadow-sm">
    <h3 className="text-2xl font-semibold mb-3">Performance & SEO</h3>
          <p className="text-muted-foreground">
            Core Web Vitals optimization, Lighthouse 95+, schema markup, image optimization.
          </p>
  </div>

<div className="rounded-lg border bg-card p-6 shadow-sm">
    <h3 className="text-2xl font-semibold mb-3">UI/UX Consulting</h3>
          <p className="text-muted-foreground">
            Design system creation, accessibility audits (WCAG), conversion-focused interfaces.
          </p>
  </div>
</div>

      {/* Optional CTA section at bottom */}
    </main>
  );
}