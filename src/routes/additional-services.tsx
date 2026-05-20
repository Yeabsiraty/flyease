import { createFileRoute } from "@tanstack/react-router";
import { Sofa, Car, PlaneTakeoff, Truck } from "lucide-react";

export const Route = createFileRoute("/additional-services")({
  head: () => ({
    meta: [
      { title: "Additional Services — Freedom VIP Aviation" },
      { name: "description", content: "Business lounges, VIP transfers, private flights, porter services and more." },
    ],
  }),
  component: AdditionalServices,
});

const items = [
  { icon: Sofa, title: "Business Lounges", desc: "Order access to premium business and first-class lounges worldwide." },
  { icon: Car, title: "VIP Transfer & Car Rental", desc: "Mercedes V-class, S-class and E-class with a professional driver, any city." },
  { icon: PlaneTakeoff, title: "Private Flights", desc: "End-to-end organization of private jet charters tailored to your itinerary." },
  { icon: Truck, title: "Porter & Loader Services", desc: "Dedicated porters for every piece of luggage, every step of the way." },
];

export default function AdditionalServices() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Additional services</p>
        <h1 className="mt-2 font-display text-5xl sm:text-6xl">Beyond the <span className="text-gradient-gold">terminal.</span></h1>
        <p className="mt-4 text-muted-foreground">A complete concierge — choose any and we'll arrange the rest.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {items.map((it) => (
          <div key={it.title} className="group rounded-2xl border border-border bg-card/60 p-8 transition hover:-translate-y-1 hover:border-gold">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
              <it.icon className="h-7 w-7" />
            </div>
            <h2 className="mt-5 font-display text-2xl text-gold">{it.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
