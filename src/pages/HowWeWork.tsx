import { PlaneTakeoff, PlaneLanding, ArrowRightLeft } from "lucide-react";

const services = [
  {
    icon: PlaneLanding,
    title: "Arrival Service",
    steps: [
      "A dedicated agent will monitor the status of your flight and punctually meet you at the arrival gate with a personalized signage.",
      "The agent will assist you and expedite your passage through passport control.",
      "The agent will lead you on to luggage claim hall and help with the retrieval of your bags. Should you need help with your luggage, porter services will be provided.",
      "You will be ultimately accompanied to your transportation or expecting party in the arrival hall.",
    ],
  },
  {
    icon: PlaneTakeoff,
    title: "Departure Service",
    steps: [
      "The meeting spot and time will be arranged ahead of time with either your driver or yourself.",
      "You will be met by a dedicated agent upon arrival at the airport. Should you need help with your luggage, porter services will be provided.",
      "The agent will guide you to the correct counter and facilitate your check-in procedures. VAT refund assistance will be also provided if necessary.",
      "You will be expedited through security check and passport control.",
      "The agent will escort you to the lounge, if you have access to it, or directly to the gate area.",
    ],
  },
  {
    icon: ArrowRightLeft,
    title: "Transit Service",
    steps: [
      "A dedicated agent will monitor the status of your flight and punctually meet you at the arrival gate with a personalized signage.",
      "If you need to clear passport control, the agent will expedite your passage through it.",
      "You will be swiftly assisted through luggage retrieval, check-in for your connecting flight and security filter.",
      "In case of any unforeseen issue, such as a missed connection or a flight cancellation, the agent will remain at your side.",
      "The agent will escort you to the lounge, if you have access to it.",
    ],
  },
];

export default function HowWeWork() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">How we work</p>
        <h1 className="mt-2 font-display text-5xl sm:text-6xl">Three services. <span className="text-gradient-gold">Zero friction.</span></h1>
        <p className="mt-4 text-muted-foreground">Every journey is choreographed end to end by a dedicated agent.</p>
      </div>

      <div className="mt-16 space-y-12">
        {services.map((s) => (
          <article key={s.title} className="grid gap-6 rounded-2xl border border-border bg-card/60 p-6 sm:p-10 md:grid-cols-[1fr_2fr]">
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
                <s.icon className="h-7 w-7" />
              </div>
              <h2 className="mt-4 font-display text-3xl text-gold">{s.title}</h2>
            </div>
            <ol className="space-y-4">
              {s.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold text-xs font-semibold text-gold">{i + 1}</span>
                  <p className="text-sm leading-relaxed text-foreground/90">{step}</p>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </div>
  );
}
