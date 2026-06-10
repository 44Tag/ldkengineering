import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Sector } from "@/data/projects";
import { jsonLdScript, breadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects, Lewis & De Kroon Inc" },
      {
        name: "description",
        content:
          "Selected structural and civil engineering projects by LDK Inc, healthcare, government, commercial, industrial and infrastructure across South Africa.",
      },
    ],
    scripts: [
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "/projects#webpage",
        url: "/projects",
        name: "Projects, Lewis & De Kroon Inc",
        description:
          "Selected structural and civil engineering projects by LDK Inc, healthcare, government, commercial, industrial and infrastructure across South Africa.",
        isPartOf: { "@id": "/#website" },
        about: { "@id": "/#organization" },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: projects.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "CreativeWork",
              name: p.name,
              description: p.blurb,
              locationCreated: {
                "@type": "Place",
                name: p.location,
                address: { addressLocality: p.location, addressCountry: "ZA" },
              },
              dateCreated: p.year.includes("–") ? undefined : p.year,
              image: p.image,
              about: p.sector,
            },
          })),
        },
      }),
      jsonLdScript(
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Projects", url: "/projects" },
        ])
      ),
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
          <h1 className="headline mt-6 reveal">Selected work.</h1>
          <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
            A cross-section of the structural and civil engineering work we've led across the
            Western Cape and beyond. Filter by sector.
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Each featured project demonstrates our ability to manage technical complexity, deliver robust engineering documentation, and coordinate multidisciplinary teams for public and private sector clients.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <h2 className="font-display text-4xl font-medium tracking-tight reveal">What separates a good engineering company from a great one.</h2>
              <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Every successful project depends on engineering that anticipates constructability, meets regulatory standards, and keeps delivery on track. That is why we combine structural and civil expertise with programme insight, specialist coordination and robust quality controls.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                These case studies are chosen to show how our team handles challenging site conditions, multi-disciplinary interfaces and the exacting requirements of healthcare, government and commercial clients. Learn more about our approach in <Link to="/services" className="font-semibold text-foreground underline decoration-accent underline-offset-2 hover:text-accent">services</Link> and the practice values on the <Link to="/about" className="font-semibold text-foreground underline decoration-accent underline-offset-2 hover:text-accent">about page</Link>.
              </p>
            </div>
            <aside className="rounded-[2rem] border border-border bg-background p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Project values
              </div>
              <ul className="mt-8 space-y-4 text-sm text-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  Technical documentation that supports buildability
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  Realistic advice on cost, programme and delivery risk
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  In-house review and sign-off by counsel engineers
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  Long-term maintenance and lifecycle resilience
                </li>
              </ul>
            </aside>
          </div>
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
                  alt={`Project image of ${p.name}, a ${p.sector.toLowerCase()} engineering project in ${p.location}`}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 img-optim"
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Project photography showing {p.sector.toLowerCase()} engineering work in {p.location}.
              </p>
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
