import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Building2, HardHat, ClipboardList, FileSearch, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { projects } from "@/data/projects";
import { Section, SectionLabel } from "@/components/site/Section";
import { webpageSchema, jsonLdScript } from "@/lib/schema";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lewis & De Kroon Inc, Structural & Civil Engineering, Cape Town" },
      {
        name: "description",
        content:
          "LDK Inc, Cape Town structural and civil engineering consultants. Healthcare, government and commercial projects across South Africa since 1984.",
      },
    ],
    scripts: [
      jsonLdScript(
        webpageSchema(
          "/",
          "Lewis & De Kroon Inc, Structural & Civil Engineering, Cape Town",
          "LDK Inc, Cape Town structural and civil engineering consultants. Healthcare, government and commercial projects across South Africa since 1984."
        )
      ),
    ],
  }),
  component: Home,
});

const stats = [
  { value: "40+", label: "Years of Practice" },
  { value: "320", label: "Projects Completed" },
  { value: "12", label: "Active Engineers" },
  { value: "R 2.1B", label: "Built Value Engineered" },
  { value: "ECSA", label: "Registered Firm" },
];

const services = [
  {
    icon: Building2,
    title: "Structural Engineering",
    description: "Design that works. We create buildings and bridges that are safe, efficient, and built to perform for decades.",
  },
  {
    icon: HardHat,
    title: "Civil Engineering",
    description: "The infrastructure that makes projects work. Roads, drainage, utilities, earthworks—done right, and often invisible.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Keeping complex projects on track. Coordination, communication, and decision-making that prevents surprises.",
  },
  {
    icon: FileSearch,
    title: "Feasibility Studies",
    description: "Independent analysis before you commit. Technical assessment that informs investment decisions with confidence.",
  },
];

const testimonials = [
  {
    quote:
      "They managed the technical risk on a live hospital site for four years without missing a milestone. That's not luck—that's genuine engineering discipline and foresight.",
    name: "Dr. M. Petersen",
    role: "Project Director, Western Cape Health Infrastructure",
  },
  {
    quote:
      "Direct, precise, and calm under pressure. Their drawings come right the first time. That matters when you're coordinating multiple trades across a complex site.",
    name: "S. Adams",
    role: "Principal Architect, Adams & Partners",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative border-b border-border">
        <div className="relative grid min-h-[88vh] grid-cols-1 lg:grid-cols-12">
          <div className="relative z-10 col-span-1 flex flex-col justify-between px-5 pb-10 pt-16 md:px-8 lg:col-span-7 lg:pb-16 lg:pt-24">
            <div>
              <div className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-muted-foreground" />
                Cape Town · Est. 1984
              </div>
              <h1 className="headline mt-8 reveal">
                Engineering<br />
                South Africa's<br />
                <span className="text-accent">built environment.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Lewis &amp; De Kroon Inc is a structural and civil engineering consultancy delivering
                healthcare, government and commercial projects across the Western Cape and beyond.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-3 border border-accent bg-accent px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-accent-foreground transition-opacity hover:opacity-90"
                >
                  View Our Projects
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border border-border px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:border-foreground"
                >
                  Request a Quote
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="mt-16 flex items-end justify-between gap-6 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span>Lat 33.9249° S</span>
              <span>Lon 18.4241° E</span>
              <span className="hidden md:inline">Scroll ↓</span>
            </div>
          </div>
          <div className="relative col-span-1 border-l border-border lg:col-span-5">
            <img
              src={heroImg}
              alt="Structural steel framework against the Cape Town sky"
              width={1920}
              height={1280}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-90 img-optim"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/10 to-background/60 lg:bg-gradient-to-l lg:from-transparent lg:to-background/80" />
            <div className="absolute bottom-6 right-6 hidden border border-border bg-background/85 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur md:block">
              Plate 01 · Steel Lattice / Western Cape
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-5">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-5 py-8 md:px-8 md:py-10 ${
                i !== 0 ? "md:border-l border-border" : ""
              } ${i % 2 === 1 ? "border-l border-border md:border-l" : ""} ${
                i < stats.length - (stats.length % 2 === 0 ? 2 : 1) ? "border-b md:border-b-0 border-border" : ""
              }`}
            >
              <div className="font-display text-4xl font-medium tracking-tight md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <div className="eyebrow mb-6">Why US</div>
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                From feasibility to handover, we pair deep technical knowledge with practical project experience. Our team specialises in delivering engineering for live healthcare facilities, heritage government buildings, large commercial developments and essential infrastructure networks.
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                We help clients reduce risk, achieve compliance and control cost while meeting demanding programme and performance requirements. That means clear communication, robust documentation and a focus on delivering outcomes that last.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <p className="text-sm leading-relaxed text-foreground">
                    Senior engineers on every significant assignment
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <p className="text-sm leading-relaxed text-foreground">
                    Healthcare, government, commercial and industrial expertise
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <p className="text-sm leading-relaxed text-foreground">
                    Practical solutions for complex site and regulatory conditions
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <p className="text-sm leading-relaxed text-foreground">
                    Realistic programme and cost guidance from day one
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-border bg-background p-8">
              <h3 className="font-display text-3xl font-medium tracking-tight">Built for complex projects</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Our portfolio includes live hospital services, civic campus upgrades, commercial precincts and technical infrastructure where safety, quality and coordination are mission-critical.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  Healthcare and laboratory engineering
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  Government and public-sector infrastructure
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  Commercial, hotel and mixed-use developments
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  Structural strengthening and site development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <Section>
        <SectionLabel index="01 / Projects" label="Selected Work" />
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-display text-4xl font-medium tracking-tight md:text-6xl">
            Engineering that performs under load, and under scrutiny.
          </h2>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 border-b border-foreground pb-1 font-mono text-xs uppercase tracking-[0.18em]"
          >
            All Projects <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              to="/projects"
              className="group flex flex-col bg-background p-5 transition-colors hover:bg-muted md:p-6"
            >
              <div className="aspect-[4/3] overflow-hidden border border-border">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 img-optim"
                />
              </div>
              <div className="mt-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <span className="border border-border px-2 py-1">{p.sector}</span>
                <span>{p.year}</span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-medium leading-tight tracking-tight">
                {p.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.location}</p>
              <div className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                View Case Study <ArrowUpRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section>
        <SectionLabel index="02 / Services" label="Core Disciplines" />
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              to="/services"
              key={s.title}
              className="group flex flex-col justify-between bg-background p-6 transition-colors hover:bg-muted md:p-8"
            >
              <div>
                <s.icon size={28} strokeWidth={1.5} className="text-accent" />
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
              <div className="mt-10 inline-flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-foreground">
                <span>Learn more</span>
                <ArrowUpRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionLabel index="03 / Voices" label="Client Confidence" />
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col gap-8 bg-background p-8 md:p-12">
              <blockquote className="font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                "{t.quote}"
              </blockquote>
              <figcaption className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {t.name}, {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="border-b border-border bg-muted">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
          <div className="md:col-span-7">
            <div className="eyebrow">04 / Start Here</div>
            <h2 className="mt-6 font-display text-4xl font-medium tracking-tight md:text-6xl">
              Have drawings on the desk?<br />
              <span className="text-accent">Bring them to LDK.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-base text-muted-foreground md:text-lg">
              We engage early, concept, feasibility or design phase, and stay engaged through
              construction. Send a brief and we'll respond within two working days.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="border border-accent bg-accent px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-accent-foreground"
              >
                Start a Project
              </Link>
              <a
                href="mailto:info@ldk.co.za"
                className="border border-border px-6 py-4 font-mono text-xs uppercase tracking-[0.18em]"
              >
                info@ldk.co.za
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
