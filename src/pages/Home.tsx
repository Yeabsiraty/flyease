import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, MapPin, Plane as PlaneIcon, Sparkles, ShieldCheck, Clock } from "lucide-react";
import { countries, TOTAL_AIRPORTS, TOTAL_COUNTRIES } from "@/data/airports";
import heroImg from "@/assets/hero-airbus.jpg";
import planeSil from "@/assets/plane-silhouette.png";
import loungeImg from "@/assets/vip-lounge.jpg";

export default function HomePage() {
  const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState("");
  const [iata, setIata] = useState("");

  const airports = useMemo(
    () => countries.find((c) => c.code === countryCode)?.airports ?? [],
    [countryCode],
  );

  const canNext = countryCode && iata;

  const goNext = () => {
    if (!canNext) return;
    navigate(`/reservation?country=${countryCode}&iata=${iata}`);
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Airbus A380 flying through golden clouds" className="h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        <div className="pointer-events-none absolute left-0 top-24 opacity-80 animate-fly">
          <div className="relative">
            <span className="plane-fuel-trail" aria-hidden="true" />
            <img src={planeSil} alt="" aria-hidden="true" className="h-12 w-auto sm:h-16" style={{ transform: "scaleX(-1)" }} />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-32 lg:pt-32">
          <div className="max-w-3xl">
            <p className="animate-fade-up font-display text-sm uppercase tracking-[0.3em] text-gold">Flyease Aviation</p>
            <h1 className="mt-4 animate-fade-up font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              <span className="text-foreground">VIP Meet &amp; Assist</span>{" "}
              <span className="text-gradient-gold">in every sky.</span>
            </h1>
            <p className="mt-6 max-w-xl animate-fade-up text-base text-muted-foreground sm:text-lg">
              From the curb to the cabin — door-to-door private aviation concierge in international airports worldwide.
            </p>
          </div>

          <div className="mt-12 max-w-3xl animate-fade-up">
            <div className="glass rounded-2xl p-6 shadow-2xl sm:p-8">
              <h2 className="font-display text-2xl text-gold">Begin your booking</h2>
              <p className="mt-1 text-sm text-muted-foreground">Choose your country, then your airport.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-gold" /> Country
                  </span>
                  <select
                    value={countryCode}
                    onChange={(e) => { setCountryCode(e.target.value); setIata(""); }}
                    className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                  >
                    <option value="">Select country…</option>
                    {countries.map((c) => (<option key={c.code} value={c.code}>{c.name}</option>))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    <PlaneIcon className="h-3.5 w-3.5 text-gold" /> Airport
                  </span>
                  <select
                    value={iata}
                    onChange={(e) => setIata(e.target.value)}
                    disabled={!countryCode}
                    className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30 disabled:opacity-50"
                  >
                    <option value="">{countryCode ? "Select airport…" : "Choose country first"}</option>
                    {airports.map((a) => (
                      <option key={a.iata} value={a.iata}>
                        {a.name} ({a.iata}){a.municipality ? ` — ${a.municipality}` : ""}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <button
                onClick={goNext}
                disabled={!canNext}
                className="btn-gold mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold sm:w-auto"
              >
                Next <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/40 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { value: TOTAL_AIRPORTS, label: "Airports" },
            { value: 10, label: "Years on service market" },
            { value: TOTAL_COUNTRIES, label: "Countries" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl text-gradient-gold sm:text-6xl">{s.value}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Our services</p>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl">Travel as it should feel.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: PlaneIcon, title: "Arrival service", desc: "A dedicated agent meets you at the gate, expedites passport control, helps with luggage and escorts you to your transport." },
            { icon: Sparkles, title: "Departure service", desc: "We meet you curbside, fast-track check-in and security, then escort you to the lounge or directly to your gate." },
            { icon: ShieldCheck, title: "Transit service", desc: "Seamless connections — gate to gate assistance with luggage, security and re-check-in, even if plans change." },
          ].map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card/60 p-6 transition hover:-translate-y-1 hover:border-gold">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl text-gold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={loungeImg} alt="Luxury VIP airport lounge" loading="lazy" className="h-[400px] w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg">
              <h2 className="font-display text-4xl sm:text-5xl">
                A <span className="text-gradient-gold">private lounge</span> in every city.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Mercedes V/S/E-class transfers, lounge access, porter services and private flight organization.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-gold">
                <Clock className="h-4 w-4" /> Available 24/7
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
