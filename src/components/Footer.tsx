import { Plane, Mail, Phone } from "lucide-react";
import { openWhatsApp, WHATSAPP_NUMBER } from "@/components/whatsapp";

const WHATSAPP_DISPLAY = `+${WHATSAPP_NUMBER.slice(0, 3)} ${WHATSAPP_NUMBER.slice(3, 5)} ${WHATSAPP_NUMBER.slice(5, 8)} ${WHATSAPP_NUMBER.slice(8)}`;

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/60 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2 font-display text-2xl">
            <Plane className="h-6 w-6 text-gold" />
            <span className="text-gradient-gold">Freedom</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            VIP airport assistance, meet &amp; assist and full concierge in airports worldwide.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg text-gold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /><span>{WHATSAPP_DISPLAY}</span></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /><span>freedom.vip@aviation.com</span></li>
            <li>
              <button
                type="button"
                onClick={() => openWhatsApp("Hello Freedom, I would like to enquire.")}
                className="gold-underline"
              >
                Chat on WhatsApp
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-gold">Service</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Arrival service</li>
            <li>Departure service</li>
            <li>Transit service</li>
            <li>VIP transfer &amp; lounges</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Freedom Aviation Services. All rights reserved.
      </div>
    </footer>
  );
}
