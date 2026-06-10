import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import aboutHero from "@/assets/hero-structure.jpg";
import ecsaLogo from "@/assets/memberships/ECSA.png";
import saiceLogo from "@/assets/memberships/SAICE.png";
import cesaLogo from "@/assets/memberships/CESA.png";
import isoLogo from "@/assets/memberships/ISO.png";
import { webpageSchema, breadcrumbSchema, jsonLdScript } from "@/lib/schema";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About, Lewis & De Kroon Inc" },
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
          "About, Lewis & De Kroon Inc",
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
  { 
    code: "V.01", 
    title: "Precision", 
    body: "Every drawing leaves our office verified, signed, and traceable. It's not just a nice-to-have—it's foundational to our practice." 
  },
  { 
    code: "V.02", 
    title: "Integrity", 
    body: "We tell clients what they need to hear, not what's convenient. That directness has defined us for forty years." 
  },
  { 
    code: "V.03", 
    title: "Innovation", 
    body: "We embrace modern materials and methods, but only when they genuinely improve outcomes. Progress without recklessness." 
  },
  { 
    code: "V.04", 
    title: "Safety", 
    body: "Public safety isn't a constraint on design—it's the purpose of design. Everything we do flows from this commitment." 
  },
];

const team = [
  { name: "Andrew Lewis", role: "Founding Director", cred: "Pr. Eng · BSc (Eng), MSAICE" },
  { name: "Pieter De Kroon", role: "Founding Director", cred: "Pr. Eng · BSc (Eng), MSAICE" },
  { name: "N. Khumalo", role: "Senior Structural Engineer", cred: "Pr. Eng · MEng" },
  { name: "R. Naidoo", role: "Civil Engineering Lead", cred: "Pr. Eng · BSc (Eng)" },
];

const memberships = [
  {
    name: "ECSA Registered",
    logo: ecsaLogo,
    href: "https://www.ecsa.co.za/",
    alt: "ECSA registered engineering company logo",
  },
  {
    name: "SAICE Member",
    logo: saiceLogo,
    href: "https://www.saice.org.za/",
    alt: "SAICE member logo",
  },
  {
    name: "CESA Affiliated",
    logo: cesaLogo,
    href: "https://www.cesa.co.za/",
    alt: "CESA affiliated company logo",
  },
  {
    name: "ISO 9001 Aligned",
    logo: isoLogo,
    href: "https://www.iso.org/iso-9001-quality-management.html",
    alt: "ISO 9001 aligned quality management logo",
  },
];

function AboutPage() {
  return (
    <>
      <section className="relative border-b border-border">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={aboutHero}
            alt="Engineering plans and facility"
            width={1920}
            height={1280}
            decoding="async"
            loading="eager"
            className="h-full w-full object-cover opacity-20 img-optim"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/90 to-background/95" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 pb-12 pt-16 md:px-8 md:pb-20 md:pt-24">
          <div className="eyebrow">Index / About</div>
          <h1 className="headline mt-6 reveal">
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
              When Andrew Lewis and Pieter De Kroon founded LDK in 1984, they made a simple choice: 
              structural design should be done by the people who sign for it.
            </p>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              Forty years later, that principle remains unchanged. Our founding directors lead every significant project, 
              work at the drawing board where it matters most, and stay engaged until the building is handed over. We've watched 
              Cape Town grow and change, and our fingerprints are on much of it—from the structural rehabilitation of Groote Schuur 
              Hospital through to major civic infrastructure and private developments.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              We're deliberately small by design. That means no silos, no corporate politics, and no junior engineers working 
              unsupervised on your project. It also means we know every client personally, remember the context of past projects, 
              and bring institutional knowledge to every new challenge.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
          <div className="md:grid md:grid-cols-12 md:gap-10">
            <div className="md:col-span-4">
              <div className="eyebrow">01.1 / Heritage</div>
            </div>
            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                The practice of Lewis and De Kroon grew from an amalgamation in 1991 between the firms of M.J. Lewis Stefanutto &amp; Partners and de Kroon Krige Skarzynski &amp; Partners. Both practices had been established for more than twenty years, and the merger strengthened the partners' ability to deliver the personal, client-centred service they valued.
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                In 2007 the office became an incorporated company. Today LDK retains that same commitment to merit-based recruitment and staff development. We are proud to have employed talented graduates from previously disadvantaged communities and supported them through practical training, long-term careers and professional registration.
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                The practice is a level 2 BEE company with 36% ownership held by previously disadvantaged individuals, and we continue to invest in skills development while maintaining the highest standards of engineering governance.
              </p>
            </div>
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
                <div className="aspect-[4/5] border border-border bg-muted overflow-hidden">
                  <img
                    src="https://placehold.net/5-600x800.png"
                    alt={p.name}
                    width={600}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover filtering color-burn brightness-95 contrast-105 img-optim"
                  />
                </div>
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
              Licensed, audited, and accountable.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We operate under rigorous professional standards and maintain ongoing professional development. 
              Our practice is independently audited to ISO 9001 standards and we hold current ECSA registration.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
              {memberships.map((m) => (
                <a
                  key={m.name}
                  href={m.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex aspect-square flex-col items-center justify-center bg-background p-6 text-center border border-transparent transition-colors hover:border-muted-foreground/90 hover:bg-white"
                >
                  <img
                    src={m.logo}
                    alt={m.alt}
                    decoding="async"
                    className="h-12 w-auto object-contain img-optim"
                  />
                  <span className="mt-4 font-mono text-[10px] uppercase tracking-[0.15em] leading-normal text-foreground hover:text-accent">
                    {m.name}
                  </span>
                </a>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 border border-foreground px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] hover:border-accent hover:text-accent"
            >
              Work with Us <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
