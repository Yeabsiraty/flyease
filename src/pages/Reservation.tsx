import { useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { countries } from "@/data/airports";
import { WhatsAppBookButton, BOOKING_SUCCESS_FLAG } from "@/components/whatsapp";
import { Plane, MapPin } from "lucide-react";

const SERVICE_OPTIONS = ["Full VIP", "Meet & Assist"];
const TYPE_OPTIONS = ["Departure service", "Arrival service", "Transit service"];

export default function ReservationPage() {
  const [params] = useSearchParams();
  const country = params.get("country") ?? "";
  const iata = params.get("iata") ?? "";
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    flightNumber: "",
    date: "",
    service: "",
    serviceType: "Departure service",
    adults: 0,
    children12: 0,
    children2: 0,
    baggage: 0,
    email: "",
    phone: "+251 95 115 6736",
    comment: "",
  });

  if (!country || !iata) return <Navigate to="/" replace />;

  const countryObj = countries.find((c) => c.code === country);
  const airport = countryObj?.airports.find((a) => a.iata === iata);

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((p) => ({ ...p, [k]: v }));

  const valid = Boolean(form.name.trim() && form.service && form.serviceType && form.phone.trim());

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Reservation</p>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl">Complete your <span className="text-gradient-gold">booking.</span></h1>

      <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl border border-border bg-card/60 px-4 py-3 text-sm">
        <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gold" />{countryObj?.name}</span>
        <span className="text-muted-foreground">·</span>
        <span className="inline-flex items-center gap-1.5"><Plane className="h-4 w-4 text-gold" />{airport?.name} ({iata})</span>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-5 rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
        <Field label="Name and surname (will be used for the nameplate)" required>
          <input required value={form.name} onChange={(e) => set("name", e.target.value)} className={inp} placeholder="John Doe" />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Flight Number">
            <input value={form.flightNumber} onChange={(e) => set("flightNumber", e.target.value)} className={inp} placeholder="ET701" />
          </Field>
          <Field label="Date (dd/mm/yyyy)">
            <input type="date" value={form.date} onChange={(e) => set("date", e.target.value)} className={inp} />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Service" required>
            <select required value={form.service} onChange={(e) => set("service", e.target.value)} className={inp}>
              <option value="">Please select</option>
              {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </Field>
          <Field label="Type of services" required>
            <select required value={form.serviceType} onChange={(e) => set("serviceType", e.target.value)} className={inp}>
              {TYPE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <NumberField label="Number of adults" value={form.adults} onChange={(v) => set("adults", v)} />
          <NumberField label="Children under 12" value={form.children12} onChange={(v) => set("children12", v)} />
          <NumberField label="Children under 2" value={form.children2} onChange={(v) => set("children2", v)} />
          <NumberField label="Checked-in baggage" value={form.baggage} onChange={(v) => set("baggage", v)} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Email">
            <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={inp} placeholder="you@example.com" />
          </Field>
          <Field label="Telephone" required>
            <input required value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inp} />
          </Field>
        </div>

        <Field label="Comment">
          <textarea value={form.comment} onChange={(e) => set("comment", e.target.value)} rows={4} className={inp} placeholder="Any special requests…" />
        </Field>

        <WhatsAppBookButton
          booking={{
            countryName: countryObj?.name ?? country,
            airportName: airport?.name ?? "",
            iata,
            valid,
            form,
          }}
          onSuccess={() => {
            sessionStorage.setItem(BOOKING_SUCCESS_FLAG, "1");
            window.dispatchEvent(new Event("booking-success"));
            navigate("/");
          }}
          className="btn-gold mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold disabled:cursor-not-allowed disabled:opacity-60"
        />

        <p className="text-center text-xs text-muted-foreground">
          Pressing Book opens WhatsApp with your booking details pre-filled.
        </p>
      </form>
    </div>
  );
}

const inp = "w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}{required && <span className="ml-1 text-gold">*</span>}
      </span>
      {children}
    </label>
  );
}

function NumberField({ label, value, onChange }: { label: string; value: number; onChange: (n: number) => void }) {
  return (
    <Field label={label}>
      <div className="flex items-center rounded-lg border border-border bg-input">
        <button type="button" onClick={() => onChange(Math.max(0, value - 1))} className="h-12 w-12 text-gold transition hover:bg-secondary">−</button>
        <input
          type="number"
          min={0}
          value={value}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
          className="w-full bg-transparent px-2 py-3 text-center text-foreground outline-none"
        />
        <button type="button" onClick={() => onChange(value + 1)} className="h-12 w-12 text-gold transition hover:bg-secondary">+</button>
      </div>
    </Field>
  );
}
