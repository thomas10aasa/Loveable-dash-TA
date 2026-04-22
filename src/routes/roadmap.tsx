import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { ROADMAP } from "@/lib/data";
import { ArrowLeft, Check } from "lucide-react";

export const Route = createFileRoute("/roadmap")({
  component: RoadmapPage,
  head: () => ({
    meta: [
      { title: "90-day roadmap — Trustidex AI" },
      {
        name: "description",
        content: "Sequenced 90-day plan to lift AI visibility and recover lost pipeline.",
      },
    ],
  }),
});

function RoadmapPage() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const toggle = (k: string) => setDone((d) => ({ ...d, [k]: !d[k] }));

  const total = ROADMAP.reduce((s, h) => s + h.items.length, 0);
  const completed = Object.values(done).filter(Boolean).length;
  const pct = (completed / total) * 100;

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
          90-day roadmap
        </div>
        <h1 className="mt-2 max-w-2xl font-display text-4xl font-medium tracking-tight md:text-5xl text-balance">
          From visibility 25 to <span className="text-opportunity">70+</span> in one quarter.
        </h1>
      </header>

      <div className="mt-8 rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center justify-between text-xs text-ink-muted">
          <span className="font-mono uppercase tracking-wider">Quarter progress</span>
          <span>
            {completed} / {total} actions
          </span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full gradient-opp transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <section className="mt-12 space-y-12">
        {ROADMAP.map((horizon, hi) => {
          const tone = horizon.color;
          const text =
            tone === "risk" ? "text-risk" : tone === "opportunity" ? "text-opportunity" : "text-signal";
          const bg =
            tone === "risk"
              ? "bg-risk-soft"
              : tone === "opportunity"
                ? "bg-opportunity-soft"
                : "bg-signal-soft";
          return (
            <div key={horizon.horizon} className="relative">
              <div className="flex items-baseline gap-4">
                <span
                  className={`rounded-full ${bg} ${text} px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em]`}
                >
                  {horizon.horizon}
                </span>
                <span className="font-display text-2xl font-medium text-ink-muted">
                  Phase {hi + 1}
                </span>
              </div>

              <ol className="mt-6 space-y-3">
                {horizon.items.map((item, ii) => {
                  const key = `${hi}-${ii}`;
                  const isDone = !!done[key];
                  return (
                    <li key={key}>
                      <button
                        onClick={() => toggle(key)}
                        className={`group flex w-full items-center gap-5 rounded-2xl border border-border bg-card p-5 text-left transition-all hover:shadow-luxe ${
                          isDone ? "opacity-60" : ""
                        }`}
                      >
                        <span
                          className={`grid size-7 shrink-0 place-items-center rounded-full border-2 transition-colors ${
                            isDone
                              ? "border-opportunity bg-opportunity text-primary-foreground"
                              : "border-border group-hover:border-ink"
                          }`}
                        >
                          {isDone && <Check className="size-4" strokeWidth={3} />}
                        </span>
                        <div className="flex-1">
                          <div
                            className={`font-medium ${isDone ? "line-through" : ""}`}
                          >
                            {item.title}
                          </div>
                          <div className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                            Owner: {item.owner}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-display text-xl font-semibold text-opportunity">
                            +{item.impact}
                          </div>
                          <div className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                            score lift
                          </div>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </section>
    </AppShell>
  );
}
