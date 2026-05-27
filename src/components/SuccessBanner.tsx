import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { CheckCircle2, X } from "lucide-react";
import { BOOKING_SUCCESS_FLAG } from "./whatsapp";

export function SuccessBanner() {
  const [visible, setVisible] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(BOOKING_SUCCESS_FLAG) === "1") {
      setVisible(true);
    }
    const onStorage = () => {
      if (sessionStorage.getItem(BOOKING_SUCCESS_FLAG) === "1") setVisible(true);
    };
    window.addEventListener("booking-success", onStorage);
    return () => window.removeEventListener("booking-success", onStorage);
  }, [pathname]);

  if (!visible) return null;

  const dismiss = () => {
    sessionStorage.removeItem(BOOKING_SUCCESS_FLAG);
    setVisible(false);
  };

  return (
    <div
      role="status"
      className="sticky top-16 z-30 border-b border-gold/40 bg-gold/10 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
          <CheckCircle2 className="h-5 w-5 text-gold" />
          <span>
            Your message has been received — we will reach you soon on WhatsApp.
          </span>
        </div>
        <button
          aria-label="Dismiss"
          onClick={dismiss}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card/60 text-foreground hover:text-gold hover:border-gold"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
