import { useState } from "react";
import { LOST_QUERIES, RISK_THEMES, fmtMoney } from "@/lib/data";
import { Header } from "./ActionTriage";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function LostRevenue() {
  const [open, setOpen] = useState<string | null>(RISK_THEMES[0].id);

  return (
    <section className="mt-16">
      <Header
        eyebrow="Lost revenue stream"
        title="The deals AI handed to your competitors"
        kicker="Grouped by theme · expand for sample queries & winners"
      />

      <div className="mt-6 space-y-3">
        {RISK_THEMES.map((theme) => {
          const isOpen = open === theme.id;
          const queries = LOST_QUERIES.filter((q) => q.theme === theme.id);
          const sevColor =
            theme.severity === "critical"
              ? "bg-risk text-primary-foreground"
              : theme.severity === "high"
                ? "bg-gold text-ink"
                : "bg-muted text-ink-soft";
          return (
            <div
              key={theme.id}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-luxe transition-shadow"
            >
              <button
                onClick={() => setOpen(isOpen ? null : theme.id)}
                className="flex w-full items-center gap-4 px-6 py-5 text-left hover:bg-canvas/60"
              >
                <span
                  className={`shrink-0 rounded-full ${sevColor} px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em]`}
                >
                  {theme.severity}
                </span>
                <div className="flex-1">
                  <div className="font-display text-xl font-medium tracking-tight">
                    {theme.theme}
                  </div>
                  <div className="mt-1 text-xs text-ink-muted">
                    {theme.lostSearches} lost searches · top winner{" "}
                    <span className="text-ink">{theme.topWinner}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl font-semibold text-risk tabular-nums">
                    {fmtMoney(theme.revenueAtRisk)}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                    at risk
                  </div>
                </div>
                <ChevronDown
                  className={`size-5 text-ink-muted transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-6 border-t border-border bg-canvas/60 p-6 md:grid-cols-[1fr_320px]">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                          Sample lost searches
                        </div>
                        <ul className="mt-3 space-y-2">
                          {queries.slice(0, 5).map((q, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm"
                            >
                              <span className="font-mono text-[10px] text-ink-muted pt-0.5">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="flex-1 text-ink-soft text-pretty">"{q.query}"</span>
                              <span className="shrink-0 text-right">
                                <div className="font-medium text-ink">{q.winner}</div>
                                <div className="font-mono text-[10px] text-risk">
                                  −{fmtMoney(q.value)}
                                </div>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl bg-ink p-5 text-primary-foreground">
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">
                          Recommended fix
                        </div>
                        <p className="mt-2 text-sm leading-snug">{theme.fix}</p>
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          <div className="rounded-xl bg-white/10 p-3">
                            <div className="font-mono text-[9px] uppercase tracking-wider opacity-70">
                              Effort
                            </div>
                            <div className="mt-0.5 font-display text-lg font-medium">
                              {theme.effortDays}d
                            </div>
                          </div>
                          <div className="rounded-xl bg-white/10 p-3">
                            <div className="font-mono text-[9px] uppercase tracking-wider opacity-70">
                              Score lift
                            </div>
                            <div className="mt-0.5 font-display text-lg font-medium text-opportunity">
                              +{theme.projectedLift}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
