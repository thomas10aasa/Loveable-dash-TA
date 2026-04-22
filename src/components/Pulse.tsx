import { motion } from "framer-motion";
import { Area, AreaChart, ResponsiveContainer, Tooltip, YAxis } from "recharts";
import { SCORE, SCORE_TREND, TOTAL_REVENUE_AT_RISK, fmtMoney, ORG } from "@/lib/data";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export function Pulse() {
  const delta = SCORE.current - SCORE.previous;
  return (
    <section className="grain relative overflow-hidden rounded-[28px] border border-border bg-card shadow-luxe gradient-hero">
      <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.1fr_1fr]">
        {/* Left — score */}
        <div className="flex flex-col justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted">
              <span className="size-1.5 rounded-full bg-risk animate-pulse" />
              Live · AI visibility pulse
            </div>
            <h1 className="mt-5 max-w-xl font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.05] tracking-tight text-balance">
              You're losing{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-risk">{fmtMoney(TOTAL_REVENUE_AT_RISK)}</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-risk-soft" />
              </span>{" "}
              in deals because AI doesn't recommend {ORG.product}.
            </h1>
            <p className="mt-4 max-w-lg text-pretty text-sm leading-relaxed text-ink-soft">
              {SCORE.lostSearches} of {SCORE.searchesAnalyzed} buyer searches went to a competitor
              this cycle. Three targeted fixes recover an estimated{" "}
              <span className="font-semibold text-ink">60% of pipeline</span>.
            </p>
          </div>

          <div className="flex flex-wrap items-end gap-8">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                Visibility score
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-[88px] leading-none font-semibold tracking-tighter">
                  {SCORE.current}
                </span>
                <span className="font-display text-2xl text-ink-muted">/100</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1 rounded-full bg-opportunity-soft px-2 py-0.5 font-medium text-opportunity">
                  <TrendingUp className="size-3" />+{delta} vs last week
                </span>
                <span className="text-ink-muted">Target {SCORE.target}</span>
              </div>
            </motion.div>

            <div className="flex-1 min-w-[180px]">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                12-week trend
              </div>
              <div className="mt-2 h-20">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={SCORE_TREND} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="pulseGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#e8a020" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#e8a020" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <YAxis hide domain={[0, 100]} />
                    <Tooltip
                      cursor={{ stroke: "rgba(232,160,32,0.4)" }}
                      contentStyle={{
                        background: "#ffffff",
                        border: "1px solid #e6e9f0",
                        borderRadius: 10,
                        fontSize: 12,
                        boxShadow: "var(--shadow-luxe)",
                      }}
                      formatter={(v) => [`${v}/100`, "Score"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="score"
                      stroke="#e8a020"
                      strokeWidth={2}
                      fill="url(#pulseGrad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Right — quick stats */}
        <div className="grid grid-cols-2 gap-3 self-stretch">
          <StatCard
            label="At-risk pipeline"
            value={fmtMoney(TOTAL_REVENUE_AT_RISK)}
            sub="across 4 themes"
            tone="risk"
          />
          <StatCard
            label="Searches lost"
            value={`${SCORE.lostSearches}`}
            sub={`of ${SCORE.searchesAnalyzed} analyzed`}
            tone="ink"
          />
          <StatCard
            label="Won by ReSys"
            value={`${SCORE.wonSearches}`}
            sub="primarily on GPT"
            tone="opp"
          />
          <StatCard
            label="Models covered"
            value="1 / 3"
            sub="GPT strong · Sonar absent"
            tone="signal"
          />
          <a
            href="#triage"
            className="group col-span-2 flex items-center justify-between rounded-2xl bg-ink px-5 py-4 text-primary-foreground shadow-deep transition-transform hover:-translate-y-0.5"
          >
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">
                Next action
              </div>
              <div className="mt-1 font-display text-lg">Open today's triage →</div>
            </div>
            <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub: string;
  tone: "risk" | "opp" | "ink" | "signal";
}) {
  const dot = {
    risk: "bg-risk",
    opp: "bg-opportunity",
    ink: "bg-ink",
    signal: "bg-signal",
  }[tone];
  return (
    <div className="rounded-2xl border border-border bg-card/80 p-5 backdrop-blur">
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
        <span className={`size-1.5 rounded-full ${dot}`} />
        {label}
      </div>
      <div className="mt-3 font-display text-3xl font-medium tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-ink-muted">{sub}</div>
    </div>
  );
}
