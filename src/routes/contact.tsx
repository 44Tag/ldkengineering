import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Download, Check } from "lucide-react";
import contactHero from "@/assets/project-hospital.jpg";
import { webpageSchema, breadcrumbSchema, jsonLdScript } from "@/lib/schema";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact, Lewis & De Kroon Inc" },
      {
        name: "description",
        content:
          "Contact LDK Inc in Milnerton, Cape Town. Physical and postal addresses, office hours, and a direct enquiry form for engineering projects.",
      },
    ],
    scripts: [
      jsonLdScript(
        webpageSchema(
          "/contact",
          "Contact, Lewis & De Kroon Inc",
          "Get in touch with LDK Inc, structural and civil engineering consultants in Cape Town. +27 21 423 9090 · info@ldk.co.za",
          "ContactPage"
        )
      ),
      jsonLdScript(
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])
      ),
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="relative border-b border-border">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={contactHero}
            alt="Cape Town engineering facility"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/90 to-background/95" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-5 pb-12 pt-16 md:px-8 md:pb-20 md:pt-24">
          <div className="eyebrow">Index / Contact</div>
          <h1 className="headline mt-6">
            Send the brief.<br />
            <span className="text-accent">We'll send the answer.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Our office is based in Milnerton, Cape Town. If you’re planning a healthcare, government, commercial or industrial project,
            we’re ready to review your brief and respond with clear next steps.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-12">
          {/* Form */}
          <div className="border-b border-border p-5 md:p-10 lg:col-span-7 lg:border-b-0 lg:border-r">
            <div className="eyebrow mb-8">01 / Project Enquiry</div>
            {sent ? (
              <div className="border border-accent p-10 text-center">
                <Check size={32} className="mx-auto text-accent" />
                <h2 className="mt-6 font-display text-3xl font-medium tracking-tight">
                  Brief received.
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  An LDK engineer will respond within two working days.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
                <div className="flex flex-col gap-2">
                  <label className="eyebrow" htmlFor="type">
                    Project Type
                  </label>
                  <select
                    id="type"
                    name="type"

                    className="border border-border bg-background px-4 py-3 font-mono text-sm focus:border-accent focus:outline-none"
                  >
                    <option>Healthcare</option>
                    <option>Commercial</option>
                    <option>Government</option>
                    <option>Industrial</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="eyebrow" htmlFor="message">
                    Project Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="mt-2 w-full border border-border bg-background px-4 py-3 font-sans text-sm focus:border-accent focus:outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="eyebrow" htmlFor="file">
                    Drawings / Specs (optional)
                  </label>
                  <input
                    id="file"
                    type="file"
                    className="mt-2 block w-full border border-border bg-background px-4 py-3 font-mono text-xs file:mr-4 file:border file:border-border file:bg-muted file:px-3 file:py-1 file:font-mono file:text-[11px] file:uppercase file:tracking-[0.18em]"
                  />
                </div>
                <div className="md:col-span-2 flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="border border-accent bg-accent px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-accent-foreground hover:opacity-90"
                  >
                    Send Brief
                  </button>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center gap-3 border border-border px-6 py-4 font-mono text-xs uppercase tracking-[0.18em]"
                  >
                    <Download size={14} /> Company Profile (PDF)
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Details */}
          <div className="p-5 md:p-10 lg:col-span-5">
            <div className="eyebrow mb-8">02 / Office</div>
            <ul className="space-y-6">
              <DetailRow icon={Phone} label="Telephone" value="+27 21 423 9090" />
              <DetailRow icon={Mail} label="Email" value="info@ldk.co.za" />
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <DetailRow
                icon={MapPin}
                label="Postal"
                value={"PO Box 15088\nVlaeberg, Cape Town\n8018, South Africa"}
              />
              <DetailRow
                icon={MapPin}
                label="Physical"
                value={"Skyliner Ave\nTyggerhof\nMilnerton, Cape Town"}
              />
              </div>
              <DetailRow
                icon={Clock}
                label="Hours"
                value="Mon–Fri · 08:00–17:00 SAST\nSaturday Closed\nSunday Closed"
              />
            </ul>

            <div className="mt-10 aspect-[4/3] overflow-hidden border border-border">
              <iframe
                title="LDK Office, Cape Town"
                src="https://www.openstreetmap.org/export/embed.html?bbox=18.4040%2C-33.9300%2C18.4290%2C-33.9170&layer=mapnik&marker=-33.9235%2C18.4165"
                className="h-full w-full grayscale"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="eyebrow" htmlFor={name}>
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="border border-border bg-background px-4 py-3 font-sans text-sm focus:border-accent focus:outline-none"
      />
    </div>
  );
}

function DetailRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
}) {
  return (
    <li className="flex gap-4 border-b border-border pb-6">
      <Icon size={18} strokeWidth={1.5} className="mt-1 text-accent" />
      <div>
        <div className="eyebrow">{label}</div>
        <div className="mt-1 whitespace-pre-line text-base">{value}</div>
      </div>
    </li>
  );
}
