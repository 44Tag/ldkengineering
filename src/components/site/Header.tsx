import { Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import ldkLogo from "@/assets/ldk logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const router = useRouter();
  const pathname = router.state.location.pathname;

  const isActive = (to: string) =>
    pathname === to || (to !== "/" && pathname.startsWith(to));

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("ldk-theme")) as
      | "dark"
      | "light"
      | null;
    const initial = saved ?? "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("light", initial === "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    localStorage.setItem("ldk-theme", next);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={ldkLogo} alt="Lewis & De Kroon Inc Logo" className="h-10 w-10 object-cover rounded-full" />
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:block">
            Lewis &amp; De Kroon Inc
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                isActive(n.to) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <Link
            to="/contact"
            className="hidden border border-accent bg-accent px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-accent-foreground transition-opacity hover:opacity-90 md:inline-block"
          >
            Request Quote
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center border border-border md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-5 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`border-b border-border py-4 font-mono text-xs uppercase tracking-[0.15em] ${
                  isActive(n.to) ? "text-accent" : "text-foreground"
                }`}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 border border-accent bg-accent px-4 py-3 text-center font-mono text-xs uppercase tracking-[0.15em] text-accent-foreground"
            >
              Request Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
