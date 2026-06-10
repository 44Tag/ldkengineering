import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, HardHat, ClipboardList, FileSearch, ZapIcon, FanIcon, ArrowUpRight } from "lucide-react";
import servicesHero from "@/assets/project-commercial.jpg";
import { webpageSchema, breadcrumbSchema, jsonLdScript } from "@/lib/schema";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Lewis & De Kroon Inc" },
      {
        name: "description",
        content:
          "LDK delivers structural engineering, civil engineering, project management and feasibility studies for healthcare, government and commercial clients.",
      },
    ],
    scripts: [
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "/services#webpage",
        url: "/services",
        name: "Services — Lewis & De Kroon Inc",
        description:
          "LDK delivers structural engineering, civil engineering, project management and feasibility studies for healthcare, government and commercial clients.",
        isPartOf: { "@id": "/#website" },
        about: { "@id": "/#organization" },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "Service",
                name: "Structural Engineering",
                description:
                  "Concept-to-completion structural design for buildings, bridges and hospitals in reinforced concrete, structural steel and composite systems.",
                provider: { "@id": "/#organization" },
                areaServed: { name: "Western Cape, South Africa" },
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "Service",
                name: "Civil Engineering",
                description:
                  "Bulk and reticulated infrastructure — roads, stormwater, sewerage, water reticulation, earthworks and site development.",
                provider: { "@id": "/#organization" },
                areaServed: { name: "Western Cape, South Africa" },
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@type": "Service",
                name: "Project Management & Contract Admin",
                description:
                  "End-to-end programme control and JBCC/GCC contract administration on behalf of the employer.",
                provider: { "@id": "/#organization" },
                areaServed: { name: "Western Cape, South Africa" },
              },
            },
            {
              "@type": "ListItem",
              position: 4,
              item: {
                "@type": "Service",
                name: "Feasibility Studies & Reports",
                description:
                  "Independent technical reports, condition assessments and due diligence for owners, insurers and government.",
                provider: { "@id": "/#organization" },
                areaServed: { name: "Western Cape, South Africa" },
              },
            },
          ],
        },
      }),
      jsonLdScript(
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ])
      ),
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: ZapIcon,
    code: "S.01",
    title: "Electrical Engineering",
    blurb:
      "Expert design and implementation of robust electrical infrastructure for healthcare facilities, public buildings, commercial developments, and large-scale institutional projects across South Africa.",
    deliverables: [
      "Medium and low voltage (MV/LV) distribution networks and reticulation",
      "Interior, exterior, emergency, and specialist lighting design",
      "Substation design, transformers, and power distribution planning",
      "Standby generators, UPS systems, and renewable energy integration (solar PV & hybrid solutions)",
      "Earthing, lightning protection, and surge suppression systems",
    ],
  },
  {
    icon: FanIcon,
    code: "S.02",
    title: "Mechanical Engineering",
    blurb:
      "Specialised HVAC, ventilation, and piped services engineered for high-performance environments, particularly hospitals, laboratories, commercial complexes, and heritage-sensitive installations.",
    deliverables: [
      "Air conditioning, mechanical ventilation, and smoke control systems (HVAC)",
      "Medical gas pipelines, hospital services, and specialised piped systems",
      "Fire protection, suppression, and life-safety systems",
      "Energy-efficient thermal modelling, CFD analysis, and sustainability solutions",
      "Steam, hot water, and central plant systems",
    ],
  },
  {
    icon: ClipboardList,
    code: "S.03",
    title: "Contract Administration & Site Monitoring",
    blurb:
      "Professional on-site oversight, quality assurance, and contract management to ensure MEP installations meet design intent, SANS standards, and client expectations.",
    deliverables: [
      "Tender documentation, bills of quantities, and technical specifications",
      "Regular site inspections, quality control, and compliance monitoring",
      "Testing, commissioning, witnessing, and handover procedures",
      "As-built documentation, O&M manuals, and close-out certification",
    ],
  },
  {
    icon: FileSearch,
    code: "S.04",
    title: "Feasibility Studies & Technical Audits",
    blurb:
      "Independent technical due diligence, condition assessments, and optimisation studies for existing MEP installations, supporting informed decision-making for government, healthcare, and private clients.",
    deliverables: [
      "MEP plant condition assessments and remaining life-cycle analysis",
      "Rational fire engineering designs and compliance reports",
      "Energy efficiency audits, Green Star / SANS 204/10400-XA support, and optimisation recommendations",
      "Pre-investment feasibility studies and technical due diligence reports",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative border-b border-border">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={servicesHero}
            alt="Commercial engineering site at construction stage with structural scaffolding and site cranes"
            width={1920}
            height={1280}
            decoding="async"
            loading="eager"
            className="h-full w-full object-cover opacity-20 img-optim"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/90 to-background/95" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 pb-12 pt-16 md:px-8 md:pb-20 md:pt-24">
          <div className="eyebrow">Index / Services</div>
          <h1 className="headline mt-6 reveal">
            Four disciplines.<br />
            <span className="text-accent">One engineering team.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
            We keep the structure of the firm deliberately small. Every project is staffed by senior
            engineers from brief to completion.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Our services are built for clients who need accountable engineering support on complex and highly regulated projects. We bring technical rigour to every contract, from detailed electrical and mechanical design to feasibility studies, technical audits and on-site contract administration.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                We serve healthcare, government, commercial, hospitality and industrial clients across South Africa. That means we understand the practical requirements of MEP design, compliance with SANS standards, and the coordination needed to integrate with architectural, structural and civil scopes.
              </p>              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Explore our <Link to="/projects" className="font-semibold text-foreground underline decoration-accent underline-offset-2 hover:text-accent">projects</Link> to see how these services are delivered in real buildings, or learn more <Link to="/about" className="font-semibold text-foreground underline decoration-accent underline-offset-2 hover:text-accent">about the firm</Link> that stands behind every design.
              </p>            </div>
            <aside className="rounded-[2rem] border border-border bg-background p-8 lg:col-span-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Market focus
              </div>
              <h2 className="mt-5 font-display text-3xl font-medium tracking-tight">Sector experience</h2>
              <ul className="mt-8 space-y-4 text-sm text-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  Hospitals, medical centres and laboratory facilities
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  Government, civic buildings and institutional campuses
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  Hotels, retail precincts and commercial towers
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  Plantrooms, service upgrades and complex refurbishments
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <div className="eyebrow">How we engineer projects</div>
              <h2 className="mt-6 font-display text-4xl font-medium tracking-tight md:text-5xl">
                A successful engineering project depends on clarity, coordination and accountability.
              </h2>
              <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Good engineering is not only about strong calculations; it's about making the complex predictable. We structure every project around design coordination, risk management and constructability so consultants, contractors and clients share the same technical basis.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Our experience on live hospitals, major civic works and commercial developments helps us identify the critical details early, reduce rework, and support handover with clear, signed documentation.
              </p>
            </div>
            <aside className="rounded-[2rem] border border-border bg-background p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Project delivery
              </div>
              <ul className="mt-8 space-y-4 text-sm text-foreground">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  Senior engineers directly involved from concept through completion
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  Interface management between civil, structural, electrical and mechanical scopes
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  Clear handover records, testing and O&amp;M documentation
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  Feasibility, compliance, and life-cycle thinking for every investment
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {services.map((s, idx) => (
        <section key={s.code} className="border-b border-border">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:gap-12 md:px-8 md:py-24">
            <div className="md:col-span-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.code} / 0{idx + 1}.04
              </div>
              <s.icon size={36} strokeWidth={1.5} className="mt-8 text-accent" />
              <h2 className="mt-8 font-display uppercase tracking-wider text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                {s.title}
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {s.blurb}
              </p>
              <div className="mt-10 border-t border-border">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {s.deliverables.map((d, i) => (
                    <div
                      key={d}
                      className={`flex gap-4 border-b border-border px-1 py-4 ${
                        i % 2 === 0 ? "md:border-r" : ""
                      }`}
                    >
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        0{i + 1}
                      </span>
                      <span className="text-sm">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-3 border border-foreground px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] hover:border-accent hover:text-accent"
              >
                Discuss your requirements <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
