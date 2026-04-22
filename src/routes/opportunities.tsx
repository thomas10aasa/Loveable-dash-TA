import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { OPPORTUNITIES, RISK_THEMES, TOTAL_OPPORTUNITY, fmtMoney } from "@/lib/data";
import { ArrowLeft, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/opportunities")({
  component: OpportunitiesPage,
  head: () => ({
    meta: [
      { title: "Growth opportunities — Trustidex AI" },
      {
        name: "description",
        content: "Prioritised actions to unlock pipeline locked behind weak AI visibility.",
      },
    ],
  }),
});

function OpportunitiesPage() {
  return (
    <AppShell>
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted hover:text-ink"
      >
        <ArrowLeft className="size-3" /> Back to War Room
      </Link>

      <header className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted">
            Growth opportunities
          </div>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-medium tracking-tight md:text-5xl text-balance">
            {fmtMoney(TOTAL_OPPORTUNITY)} in pipeline,{" "}
            <span className="text-opportunity">3 moves away.</span>
          </h1>
        </div>
        <p className="max-w-sm text-sm text-ink-soft">
          Each opportunity is sized in dollars, sequenced by horizon, and scored against expected
          visibility lift.
        </p>
      </header>

      <section className="mt-12 space-y-4">
        {OPPORTUNITIES.map((o, i) => (
          <article
            key={o.id}
            className="grid gap-6 rounded-3xl border border-border bg-card p-6 shadow-luxe md:grid-cols-[80px_1fr_220px_180px] md:items-center"
          >
            <div>
              <div className="font-display text-5xl font-medium text-ink-muted/40 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-opportunity" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-opportunity">
                  {o.horizon} · {o.impact} impact
                </span>
              </div>
              <h3 className="mt-1 font-display text-2xl font-medium tracking-tight">{o.title}</h3>
              <p className="mt-1 text-sm text-ink-soft">{o.detail}</p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                Revenue unlock
              </div>
              <div className="mt-1 font-display text-3xl font-semibold text-opportunity">
                {fmtMoney(o.revenueUnlock)}
              </div>
              <div className="text-xs text-ink-muted">+{o.scoreLift} pts to score</div>
            </div>
            <button className="inline-flex items-center justify-between gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
              Start work <ArrowRight className="size-4" />
            </button>
          </article>
        ))}
      </section>

      <section className="mt-16">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted">
          Linked risk themes
        </div>
        <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">
          Each opportunity closes a real revenue leak
        </h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {RISK_THEMES.map((r) => (
            <div
              key={r.id}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{r.theme}</span>
                <span className="font-display text-xl font-semibold text-risk">
                  {fmtMoney(r.revenueAtRisk)}
                </span>
              </div>
              <p className="mt-2 text-xs text-ink-soft">{r.fix}</p>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
