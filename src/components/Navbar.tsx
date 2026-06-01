import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Plane } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/how-we-work", label: "How We Work" },
  { to: "/additional-services", label: "Additional Services" },
  { to: "/about", label: "About Us" },
  { to: "/airports", label: "Airports" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); setClosing(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => {
    setClosing(true);
    setTimeout(() => { setOpen(false); setClosing(false); }, 330);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl font-semibold">
          <Plane className="h-6 w-6 text-gold" />
          <span className="text-gradient-gold">Freedom</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              data-active={pathname === l.to}
              className="gold-underline text-sm font-medium tracking-wide text-foreground/85 transition hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            onClick={close}
            className={`absolute inset-0 bg-background/40 backdrop-blur-md ${closing ? "backdrop-out" : "backdrop-in"}`}
          />
          <aside
            className={`absolute right-0 top-0 h-full w-[78%] max-w-sm border-l border-border bg-card/95 backdrop-blur-2xl shadow-2xl ${closing ? "drawer-out" : "drawer-in"}`}
          >
            <div className="flex items-center justify-between border-b border-border/60 p-4">
              <div className="flex items-center gap-2 font-display text-xl">
                <Plane className="h-5 w-5 text-gold" />
                <span className="text-gradient-gold">Freedom</span>
              </div>
              <button
                aria-label="Close menu"
                onClick={close}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground hover:text-gold hover:border-gold"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col p-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  data-active={pathname === l.to}
                  onClick={close}
                  className="rounded-md px-4 py-3 text-base font-medium text-foreground/90 transition hover:bg-secondary hover:text-gold data-[active=true]:text-gold"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
