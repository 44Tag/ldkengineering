import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="col-span-2">
          <div className="font-display text-3xl font-medium tracking-tight">LDK</div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Lewis &amp; De Kroon Inc — Structural and civil engineering consultants based in Cape Town,
            South Africa.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-4">Office</div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            PO Box 15088<br />
            Vlaeberg, Cape Town<br />
            8018, South Africa
          </p>
        </div>
        <div>
          <div className="eyebrow mb-4">Contact</div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            +27 21 423 9090<br />
            info@ldk.co.za<br />
            Mon–Fri · 08:00–17:00
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-3 px-5 py-5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground md:flex-row md:items-center md:px-8">
          <div>© {new Date().getFullYear()} Lewis &amp; De Kroon Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
