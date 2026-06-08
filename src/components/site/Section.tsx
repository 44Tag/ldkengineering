import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`border-b border-border ${className}`}>
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">{children}</div>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4 border-b border-border pb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
      <span>{index}</span>
      <span className="h-px flex-1 bg-border" />
      <span>{label}</span>
    </div>
  );
}
