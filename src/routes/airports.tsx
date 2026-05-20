import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, MapPin, Plane } from "lucide-react";
import { countries } from "@/data/airports";

export const Route = createFileRoute("/airports")({
  head: () => ({
    meta: [
      { title: "Find an Airport — Freedom VIP Aviation" },
      { name: "description", content: "Search across all international airports we serve. Country is selected automatically." },
    ],
  }),
  component: AirportsPage,
});

interface FlatAirport {
  iata: string;
  name: string;
  municipality: string;
  countryCode: string;
  countryName: string;
}

const allAirports: FlatAirport[] = countries.flatMap((c) =>
  c.airports.map((a) => ({
    iata: a.iata,
    name: a.name,
    municipality: a.municipality,
    countryCode: c.code,
    countryName: c.name,
  })),
);

export default function AirportsPage() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return allAirports
      .filter(
        (a) =>
          a.iata.toLowerCase().includes(term) ||
          a.name.toLowerCase().includes(term) ||
          a.municipality.toLowerCase().includes(term) ||
          a.countryName.toLowerCase().includes(term),
      )
      .slice(0, 40);
  }, [q]);

  const select = (a: FlatAirport) => {
    navigate({ to: "/reservation", search: { country: a.countryCode, iata: a.iata } });
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Airports</p>
      <h1 className="mt-2 font-display text-5xl sm:text-6xl">Find your <span className="text-gradient-gold">airport.</span></h1>
      <p className="mt-4 max-w-xl text-muted-foreground">Search by airport name, IATA code, city or country. We'll select the country automatically.</p>

      <div className="mt-10 glass rounded-2xl p-4 sm:p-6">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gold" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="e.g. Heathrow, JFK, Addis Ababa, Italy…"
            className="w-full rounded-lg border border-border bg-input py-4 pl-12 pr-4 text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
          />
        </div>

        {q && (
          <ul className="mt-4 max-h-[60vh] divide-y divide-border overflow-y-auto rounded-lg">
            {results.length === 0 && (
              <li className="px-4 py-6 text-center text-sm text-muted-foreground">No airports found.</li>
            )}
            {results.map((a) => (
              <li key={`${a.countryCode}-${a.iata}`}>
                <button
                  onClick={() => select(a)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition hover:bg-secondary"
                >
                  <div className="flex items-center gap-3">
                    <Plane className="h-5 w-5 text-gold" />
                    <div>
                      <div className="font-medium text-foreground">{a.name} <span className="text-gold">({a.iata})</span></div>
                      <div className="text-xs text-muted-foreground">{a.municipality}{a.municipality ? " · " : ""}{a.countryName}</div>
                    </div>
                  </div>
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
