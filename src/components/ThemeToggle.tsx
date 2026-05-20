import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "freedom-theme";

function applyTheme(theme: "royal" | "light") {
  const root = document.documentElement;
  if (theme === "light") root.classList.add("light");
  else root.classList.remove("light");
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"royal" | "light">("royal");

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as "royal" | "light" | null) ?? "royal";
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const toggle = () => {
    const next = theme === "royal" ? "light" : "royal";
    setTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition hover:text-gold hover:border-gold ${className}`}
    >
      {theme === "royal" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
