import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { webpageSchema, breadcrumbSchema, jsonLdScript } from "@/lib/schema";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Lewis & De Kroon Inc" },
      {
        name: "description",
        content:
          "Lewis & De Kroon Inc is a Cape Town structural and civil engineering consultancy founded in 1984. Meet the team and our practice values.",
      },
    ],
    scripts: [
      jsonLdScript(
        webpageSchema(
          "/about",
          "About — Lewis & De Kroon Inc",
          "Lewis & De Kroon Inc is a Cape Town structural and civil engineering consultancy founded in 1984. Meet the team and our practice values.",
          "AboutPage"
        )
      ),
      jsonLdScript(
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ])
      ),
    ],
  }),
  component: AboutPage,
});

const values = [
  { code: "V.01", title: "Precision", body: "Every drawing leaves the office checked, signed and traceable." },
  { code: "V.02", title: "Integrity", body: "We tell clients what they need to hear, not what's convenient." },
  { code: "V.03", title: "Innovation", body: "Modern materials, modern methods, applied with restraint." },
  { code: "V.04", title: "Safety", body: "Public safety is non-negotiable. It shapes every decision we make." },
];

const team = [
  { name: "Andrew Lewis", role: "Founding Director", cred: "Pr. Eng · BSc (Eng), MSAICE" },
  { name: "Pieter De Kroon", role: "Founding Director", cred: "Pr. Eng · BSc (Eng), MSAICE" },
  { name: "N. Khumalo", role: "Senior Structural Engineer", cred: "Pr. Eng · MEng" },
  { name: "R. Naidoo", role: "Civil Engineering Lead", cred: "Pr. Eng · BSc (Eng)" },
];

const memberships = ["ECSA Registered", "SAICE Member", "CESA Affiliated", "ISO 9001 Aligned"];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 pb-12 pt-16 md:px-8 md:pb-20 md:pt-24">
          <div className="eyebrow">Index / About</div>
          <h1 className="headline mt-6">
            Founded in Cape Town.<br />
            <span className="text-accent">Built on judgement.</span>
          </h1>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
          <div className="md:col-span-4">
            <div className="eyebrow">01 / History</div>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              Lewis &amp; De Kroon Inc was founded in 1984 by Andrew Lewis and Pieter De Kroon, two
              engineers who believed structural design should be done by the people who sign for it.
            </p>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              Four decades on, that principle still runs the firm. Our directors lead every project,
              draw on the board where it matters, and stay on site until handover. Our portfolio
              spans Groote Schuur Hospital, provincial government infrastructure and major private
              commercial developments across the Western Cape.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
          <div className="eyebrow mb-10">02 / Values</div>
          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-4">
            {values.map((v) => (
              <div key={v.code} className="bg-background p-6 md:p-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  {v.code}
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
          <div className="eyebrow mb-10">03 / Leadership</div>
          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {team.map((p) => (
              <div key={p.name} className="bg-background p-6 md:p-8">
                <div className="aspect-[4/5] border border-border bg-muted" />
                <h3 className="mt-5 font-display text-xl font-medium tracking-tight">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {p.cred}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
          <div className="md:col-span-4">
            <div className="eyebrow">04 / Credentials</div>
            <h2 className="mt-6 font-display text-3xl font-medium tracking-tight md:text-4xl">
              Registered, audited, accountable.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
              {memberships.map((m) => (
                <div
                  key={m}
                  className="flex aspect-square items-center justify-center bg-background p-4 text-center font-mono text-[11px] uppercase tracking-[0.18em]"
                >
                  {m}
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 border border-foreground px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] hover:border-accent hover:text-accent"
            >
              Work with LDK <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
