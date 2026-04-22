import { MODELS } from "@/lib/data";
import { Header } from "./ActionTriage";

export function ModelRadar() {
  return (
    <section className="mt-16">
      <Header
        eyebrow="Model coverage"
        title="Where AI knows you — and where it doesn't"
        kicker="Visibility per platform · 20 searches each"
      />
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {MODELS.map((m) => (
          <ModelCard key={m.name} m={m} />
        ))}
      </div>
    </section>
  );
}

function ModelCard({ m }: { m: (typeof MODELS)[number] }) {
  const tone =
    m.visibility >= 50 ? "opportunity" : m.visibility >= 20 ? "gold" : "risk";
  const ring =
    tone === "opportunity"
      ? "stroke-opportunity"
      : tone === "gold"
        ? "stroke-gold"
        : "stroke-risk";
  const text =
    tone === "opportunity"
      ? "text-opportunity"
      : tone === "gold"
        ? "text-gold"
        : "text-risk";
  const bg =
    tone === "opportunity"
      ? "bg-opportunity-soft"
      : tone === "gold"
        ? "bg-canvas"
        : "bg-risk-soft";

  const r = 52;
  const c = 2 * Math.PI * r;
  const offset = c - (m.visibility / 100) * c;

  return (
    <article className="rounded-3xl border border-border bg-card p-6 shadow-luxe">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
            Platform
          </div>
          <div className="mt-1 font-mono text-sm font-medium">{m.name}</div>
        </div>
        <span
          className={`rounded-full ${bg} ${text} px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider`}
        >
          {m.label}
        </span>
      </div>

      <div className="mt-6 flex items-center gap-6">
        <div className="relative size-32 shrink-0">
          <svg viewBox="0 0 120 120" className="-rotate-90">
            <circle
              cx="60"
              cy="60"
              r={r}
              fill="none"
              strokeWidth="8"
              className="stroke-muted"
            />
            <circle
              cx="60"
              cy="60"
              r={r}
              fill="none"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={c}
              strokeDashoffset={offset}
              className={ring}
              style={{ transition: "stroke-dashoffset 1s ease" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-3xl font-semibold tracking-tight">
              {m.visibility}%
            </span>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <Row label="Searches" value={String(m.runs)} />
          <Row label="Hits for ReSys" value={String(m.hits)} />
          <Row label="Lost to others" value={String(m.runs - m.hits)} />
        </div>
      </div>
    </article>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-6 border-b border-dashed border-border pb-1.5 last:border-0">
      <span className="text-xs text-ink-muted">{label}</span>
      <span className="font-mono text-sm font-medium tabular-nums">{value}</span>
    </div>
  );
}
