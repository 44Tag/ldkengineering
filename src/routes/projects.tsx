import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Sector } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Lewis & De Kroon Inc" },
      {
        name: "description",
        content:
          "Selected structural and civil engineering projects by LDK Inc — healthcare, government, commercial, industrial and infrastructure across South Africa.",
      },
    ],
  }),
  component: ProjectsPage,
});

const filters: Array<"All" | Sector> = [
  "All",
  "Healthcare",
  "Government",
  "Commercial",
  "Industrial",
  "Infrastructure",
];

function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.sector === active);

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 pb-12 pt-16 md:px-8 md:pb-20 md:pt-24">
          <div className="eyebrow">Index / Projects</div>
          <h1 className="headline mt-6">Selected work.</h1>
          <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
            A cross-section of the structural and civil engineering work we've led across the
            Western Cape and beyond. Filter by sector.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto flex max-w-[1400px] flex-wrap gap-2 px-5 py-5 md:px-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                active === f
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto self-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {visible.length} / {projects.length}
          </span>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article key={p.slug} className="group flex flex-col bg-background p-5 md:p-6">
              <div className="aspect-[4/3] overflow-hidden border border-border">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <span className="border border-border px-2 py-1">{p.sector}</span>
                <span>{p.year}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-medium leading-tight tracking-tight">
                {p.name}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4 font-mono text-[11px] uppercase tracking-[0.18em]">
                <span className="text-muted-foreground">Value · {p.value ?? "—"}</span>
                <Link to="/contact" className="inline-flex items-center gap-2 text-accent">
                  Case Study <ArrowUpRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
