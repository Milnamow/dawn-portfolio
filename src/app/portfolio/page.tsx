import type { Metadata } from "next";
// import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | Selected Works",
  description: "Recent projects — SaaS dashboards, e-commerce, marketing sites, tools.",
};

export default function PortfolioPage() {
  const projects = [
    { title: "E-commerce Platform", slug: "ecommerce", desc: "Next.js 15 + Stripe + Sanity", year: 2025 },
    { title: "AI Dashboard", slug: "ai-dashboard", desc: "Real-time data with Vercel AI SDK", year: 2025 },
    // ...
  ];

  return (
    <main className="container mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-12">Portfolio</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project) => (
          <div
            key={project.slug}
            className="group relative overflow-hidden rounded-xl border bg-card hover:shadow-xl transition"
          >
            {/* <div className="aspect-[4/3] bg-muted" /> ← placeholder or real image */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">{project.desc}</p>
              <div className="text-sm text-muted-foreground">{project.year}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}