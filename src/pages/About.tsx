import loungeImg from "@/assets/vip-lounge.jpg";
import { TOTAL_AIRPORTS, TOTAL_COUNTRIES } from "@/data/airports";

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">About us</p>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">A professional team. <span className="text-gradient-gold">20+ years on board.</span></h1>
          <div className="mt-6 space-y-4 text-foreground/90">
            <p>We are a professional team from the aviation industry that has more than <strong className="text-gold">20 years of experience</strong> in resolving issues related to VIP passenger services, organizing transportation and bookings.</p>
            <p>We provide this service to private clients and companies and provide their travel — "door to door", organizing their journey from car booking to VIP service at any airports, guiding and monitoring their journey at every stage of the service to ensure complete comfort and joy of travel.</p>
            <p>We also offer assistance and support to travel agencies and tour operators by providing assistance in organizing VIP services at airports for their clients and ensuring favorable corporate conditions in case of cooperation on an ongoing basis.</p>
            <p>We are distinguished by our willingness to take on non-standard projects in unfamiliar airports for clients with a non-trivial solution for guests. Always at your disposal and ready for feedback at any moment!</p>
          </div>
        </div>
        <div className="relative">
          <img src={loungeImg} alt="VIP lounge" loading="lazy" className="rounded-2xl border border-border object-cover shadow-2xl animate-float" />
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-gold bg-card/90 p-4 backdrop-blur md:block">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Trusted by guests in</div>
            <div className="font-display text-2xl text-gradient-gold">{TOTAL_COUNTRIES} countries</div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-8 rounded-2xl border border-border bg-card/60 p-10 sm:grid-cols-3">
        <Stat value={TOTAL_AIRPORTS} label="Airports" />
        <Stat value="10" label="Years on service market" />
        <Stat value={TOTAL_COUNTRIES} label="Countries" />
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-5xl text-gradient-gold sm:text-6xl">{value}</div>
      <div className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}
