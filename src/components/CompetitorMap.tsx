import { COMPETITORS } from "@/lib/data";
import { Link } from "@tanstack/react-router";
import { Header } from "./ActionTriage";
import { ArrowRight, ArrowUpRight, Minus } from "lucide-react";

export function CompetitorMap() {
  const max = Math.max(...COMPETITORS.map((c) => c.mentions));
  return (
    <section className="mt-16">
      <Header
        eyebrow="Threat map"
        title="Who's eating your lunch"
        kicker="Citation share across 60 buyer searches · last 12 weeks"
      />

      <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-card shadow-luxe">
        <div className="grid grid-cols-12 border-b border-border bg-muted/40 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          <div className="col-span-4">Company</div>
          <div className="col-span-5">Citation share</div>
          <div className="col-span-1 text-right">Trend</div>
          <div className="col-span-2 text-right">Mentions</div>
        </div>
        <ul className="divide-y divide-border">
          {COMPETITORS.map((c, i) => {
            const pct = (c.mentions / max) * 100;
            return (
              <li
                key={c.name}
                className={`grid grid-cols-12 items-center gap-3 px-6 py-4 transition-colors hover:bg-canvas/60 ${
                  c.you ? "bg-risk-soft/40" : ""
                }`}
              >
                <div className="col-span-4 flex items-center gap-3">
                  <span className="font-mono text-[10px] text-ink-muted w-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`font-medium ${c.you ? "text-risk" : "text-ink"}`}>
                    {c.name}
                  </span>
                  {c.you && (
                    <span className="rounded-full bg-risk px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-primary-foreground">
                      You
                    </span>
                  )}
                </div>
                <div className="col-span-5">
                  <div className="relative h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className={`absolute inset-y-0 left-0 rounded-full ${
                        c.you ? "gradient-risk" : "bg-ink"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="mt-1.5 flex gap-2 font-mono text-[10px] text-ink-muted">
                    <span>GPT {c.models.gpt}</span>
                    <span>·</span>
                    <span>Claude {c.models.claude}</span>
                    <span>·</span>
                    <span>Sonar {c.models.sonar}</span>
                  </div>
                </div>
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
        <div className="border-t border-border bg-muted/30 px-6 py-3 text-right">
          <Link
            to="/competitors"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:gap-2.5 transition-all"
          >
            Full competitor analysis <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TrendBadge({ trend }: { trend: number }) {
  if (trend === 0)
    return (
      <span className="inline-flex items-center gap-0.5 text-xs text-ink-muted">
        <Minus className="size-3" />
      </span>
    );
  const up = trend > 0;
  return (
    <span
      className={`inline-flex items-center gap-0.5 font-mono text-[11px] font-medium ${
        up ? "text-risk" : "text-opportunity"
      }`}
    >
      <ArrowUpRight className={`size-3 ${up ? "" : "rotate-90"}`} />
      {Math.abs(trend)}
    </span>
  );
}
