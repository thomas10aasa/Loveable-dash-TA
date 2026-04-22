import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { COMPETITORS, MODELS } from "@/lib/data";
import { TrendBadge } from "@/components/CompetitorMap";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/competitors")({
  component: CompetitorsPage,
  head: () => ({
    meta: [
      { title: "Competitor analysis — Trustidex AI" },
      {
        name: "description",
        content: "Citation share, model coverage, and trend data for every competitor in your space.",
      },
    ],
  }),
});

function CompetitorsPage() {
  const max = Math.max(...COMPETITORS.map((c) => c.mentions));
  return (
    <AppShell>
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted hover:text-ink"
      >
        <ArrowLeft className="size-3" /> Back to War Room
      </Link>
      <header className="mt-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted">
          Competitor analysis
        </div>
        <h1 className="mt-2 max-w-2xl font-display text-4xl font-medium tracking-tight md:text-5xl text-balance">
          Ten companies are absorbing the recommendations meant for ReSys.
        </h1>
        <p className="mt-3 max-w-xl text-sm text-ink-soft">
          Citation share across 60 buyer searches. Sorted by frequency, broken down by AI model.
        </p>
      </header>

      <section className="mt-10 grid gap-3 md:grid-cols-3">
        {MODELS.map((m) => (
          <div key={m.name} className="rounded-2xl border border-border bg-card p-5">
            <div className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
              {m.name}
            </div>
            <div className="mt-2 font-display text-3xl font-medium">{m.visibility}%</div>
            <div className="text-xs text-ink-muted">your visibility</div>
          </div>
        ))}
      </section>

      <section className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-luxe">
        <div className="grid grid-cols-12 border-b border-border bg-muted/40 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          <div className="col-span-3">Company</div>
          <div className="col-span-3">Citation share</div>
          <div className="col-span-1 text-right">GPT</div>
          <div className="col-span-1 text-right">Claude</div>
          <div className="col-span-1 text-right">Sonar</div>
          <div className="col-span-1 text-right">Trend</div>
          <div className="col-span-2 text-right">Total</div>
        </div>
        <ul className="divide-y divide-border">
          {COMPETITORS.map((c, i) => {
            const pct = (c.mentions / max) * 100;
            return (
              <li
                key={c.name}
                className={`grid grid-cols-12 items-center gap-3 px-6 py-4 ${
                  c.you ? "bg-risk-soft/40" : ""
                }`}
              >
                <div className="col-span-3 flex items-center gap-3">
                  <span className="font-mono text-[10px] text-ink-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`font-medium ${c.you ? "text-risk" : ""}`}>{c.name}</span>
                  {c.you && (
                    <span className="rounded-full bg-risk px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase text-primary-foreground">
                      You
                    </span>
                  )}
                </div>
                <div className="col-span-3">
                  <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full ${c.you ? "gradient-risk" : "bg-ink"}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
                <Cell n={c.models.gpt} />
                <Cell n={c.models.claude} />
                <Cell n={c.models.sonar} />
                <div className="col-span-1 text-right">
                  <TrendBadge trend={c.trend} />
                </div>
                <div className="col-span-2 text-right font-display text-2xl font-medium tabular-nums">
                  {c.mentions}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </AppShell>
  );
}

function Cell({ n }: { n: number }) {
  return (
    <div
      className={`col-span-1 text-right font-mono text-sm tabular-nums ${
        n === 0 ? "text-ink-muted/50" : "text-ink"
      }`}
    >
      {n}
    </div>
  );
}
