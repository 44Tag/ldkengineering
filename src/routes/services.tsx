import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, HardHat, ClipboardList, FileSearch, ArrowUpRight } from "lucide-react";

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
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Building2,
    code: "S.01",
    title: "Structural Engineering",
    blurb:
      "Concept-to-completion structural design for buildings, bridges and hospitals in reinforced concrete, structural steel and composite systems.",
    deliverables: [
      "Concept and scheme design",
      "Detailed structural drawings & bar bending schedules",
      "Specifications and bills of quantity input",
      "Site inspections and as-built certificates",
    ],
  },
  {
    icon: HardHat,
    code: "S.02",
    title: "Civil Engineering",
    blurb:
      "Bulk and reticulated infrastructure — roads, stormwater, sewerage, water reticulation, earthworks and site development.",
    deliverables: [
      "Site investigations and geotechnical interpretation",
      "Road, drainage and earthworks design",
      "Service reticulation layouts",
      "Construction monitoring",
    ],
  },
  {
    icon: ClipboardList,
    code: "S.03",
    title: "Project Management & Contract Admin",
    blurb:
      "End-to-end programme control and JBCC/GCC contract administration on behalf of the employer.",
    deliverables: [
      "Procurement strategy & tender documentation",
      "Programme and cost monitoring",
      "Site meetings, instructions and payment certificates",
      "Final account close-out",
    ],
  },
  {
    icon: FileSearch,
    code: "S.04",
    title: "Feasibility Studies & Reports",
    blurb:
      "Independent technical reports, condition assessments and due diligence for owners, insurers and government.",
    deliverables: [
      "Structural condition assessments",
      "Forensic investigations",
      "Pre-acquisition technical due diligence",
      "Public-sector feasibility reports",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 pb-12 pt-16 md:px-8 md:pb-20 md:pt-24">
          <div className="eyebrow">Index / Services</div>
          <h1 className="headline mt-6">
            Four disciplines.<br />
            <span className="text-accent">One engineering team.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
            We keep the structure of the firm deliberately small. Every project is staffed by senior
            engineers from brief to completion.
          </p>
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
              <h2 className="mt-8 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
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
