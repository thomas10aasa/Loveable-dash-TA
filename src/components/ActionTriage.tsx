import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { RISK_THEMES, OPPORTUNITIES, ANOMALIES, fmtMoney } from "@/lib/data";
import { AlertTriangle, Sparkles, Activity, ArrowRight } from "lucide-react";

export function ActionTriage() {
  const topRisk = RISK_THEMES[0];
  const topOpp = OPPORTUNITIES[1];
  const topAnomaly = ANOMALIES[0];

  return (
    <section id="triage" className="mt-10">
      <Header
        eyebrow="Action triage"
        title="Three things to do before Friday"
        kicker="Each card includes the fix. No tab-hunting."
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <TriageCard
          tone="risk"
          icon={<AlertTriangle className="size-5" />}
          tag="At risk now"
          title={topRisk.theme}
          metric={fmtMoney(topRisk.revenueAtRisk)}
          metricLabel="pipeline at risk"
          body={`${topRisk.lostSearches} buyer searches lost to ${topRisk.topWinner}. Sample: "${topRisk.sampleQuery}"`}
          fix={topRisk.fix}
          effort={`${topRisk.effortDays} days`}
          lift={`+${topRisk.projectedLift} pts`}
          cta={{ to: "/opportunities", label: "Open fix plan" }}
          delay={0}
        />
        <TriageCard
          tone="signal"
          icon={<Activity className="size-5" />}
          tag="Anomaly detected"
          title={topAnomaly.label}
          metric={fmtMoney(topAnomaly.impact)}
          metricLabel="estimated drag"
          body={topAnomaly.detail}
          fix="Submit ReSys to Sonar's known sources via priority directories (Clutch, GoodFirms)."
          effort="7 days"
          lift="+9 pts"
          cta={{ to: "/competitors", label: "See coverage gap" }}
          delay={0.08}
        />
        <TriageCard
          tone="opp"
          icon={<Sparkles className="size-5" />}
          tag="Growth opening"
          title={topOpp.title}
          metric={fmtMoney(topOpp.revenueUnlock)}
          metricLabel="revenue unlock"
          body={topOpp.detail}
          fix="Ship 4 query-specific landing pages mapped 1:1 to lost search themes."
          effort={topOpp.horizon}
          lift={`+${topOpp.scoreLift} pts`}
          cta={{ to: "/opportunities", label: "View opportunities" }}
          delay={0.16}
        />
      </div>
    </section>
  );
}

function TriageCard({
  tone,
  icon,
  tag,
  title,
  metric,
  metricLabel,
  body,
  fix,
  effort,
  lift,
  cta,
  delay,
}: {
  tone: "risk" | "opp" | "signal";
  icon: React.ReactNode;
  tag: string;
  title: string;
  metric: string;
  metricLabel: string;
  body: string;
  fix: string;
  effort: string;
  lift: string;
  cta: { to: string; label: string };
  delay: number;
}) {
  const tokens = {
    risk: {
      bg: "bg-risk-soft",
      text: "text-risk",
      ring: "ring-risk/20",
      gradient: "gradient-risk",
      shadow: "hover:shadow-glow-risk",
    },
    opp: {
      bg: "bg-opportunity-soft",
      text: "text-opportunity",
      ring: "ring-opportunity/20",
      gradient: "gradient-opp",
      shadow: "hover:shadow-glow-opp",
    },
    signal: {
      bg: "bg-signal-soft",
      text: "text-signal",
      ring: "ring-signal/20",
      gradient: "gradient-ink",
      shadow: "hover:shadow-deep",
    },
  }[tone];

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-luxe transition-all ${tokens.shadow}`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full ${tokens.bg} ${tokens.text} px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em]`}
        >
          {icon}
          {tag}
        </span>
        <span className={`size-2 rounded-full ${tokens.text.replace("text-", "bg-")} animate-pulse`} />
      </div>

      <h3 className="mt-5 font-display text-2xl font-medium tracking-tight text-balance">{title}</h3>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-display text-4xl font-semibold tracking-tight">{metric}</span>
        <span className="text-xs text-ink-muted">{metricLabel}</span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-ink-soft text-pretty">{body}</p>

      <div className="mt-5 rounded-2xl border border-dashed border-border bg-canvas/60 p-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          Recommended fix
        </div>
        <p className="mt-1.5 text-sm font-medium leading-snug">{fix}</p>
        <div className="mt-3 flex items-center gap-3 text-[11px]">
          <span className="rounded-md bg-muted px-2 py-0.5 font-mono uppercase tracking-wider text-ink-soft">
            Effort {effort}
          </span>
          <span className={`rounded-md ${tokens.bg} ${tokens.text} px-2 py-0.5 font-mono uppercase tracking-wider`}>
            Lift {lift}
          </span>
        </div>
      </div>

      <Link
        to={cta.to}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:gap-2.5 transition-all"
      >
        {cta.label}
        <ArrowRight className="size-4" />
      </Link>
    </motion.article>
  );
}

export function Header({
  eyebrow,
  title,
  kicker,
}: {
  eyebrow: string;
  title: string;
  kicker?: string;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-muted">
          {eyebrow}
        </div>
        <h2 className="mt-2 font-display text-3xl font-medium tracking-tight md:text-4xl">
          {title}
        </h2>
      </div>
      {kicker && <p className="text-sm text-ink-muted">{kicker}</p>}
    </div>
  );
}
