import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { ORG } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const NAV: { to: string; label: string; exact?: boolean }[] = [
  { to: "/", label: "War Room", exact: true },
  { to: "/competitors", label: "Competitors" },
  { to: "/opportunities", label: "Opportunities" },
  { to: "/roadmap", label: "Roadmap" },
];

export function AppShell() {
  const loc = useLocation();
  return (
    <div className="min-h-screen bg-canvas text-ink">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-canvas/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4 lg:px-10">
          <Link to="/" className="group flex items-baseline gap-3">
            <span className="font-display text-2xl font-semibold tracking-tight">
              {ORG.brand}
              <span className="text-risk">.</span>
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted md:inline">
              {ORG.product} · {ORG.pilot}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/60 p-1 md:flex">
            {NAV.map((n) => {
              const active = n.exact ? loc.pathname === n.to : loc.pathname.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={[
                    "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                    active
                      ? "bg-ink text-primary-foreground shadow-luxe"
                      : "text-ink-soft hover:text-ink",
                  ].join(" ")}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden text-right md:block">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                Last check
              </div>
              <div className="text-xs font-medium text-ink-soft">{ORG.lastCheck}</div>
            </div>
            <div className="flex h-9 items-center gap-2 rounded-full border border-border bg-card px-3 text-xs font-medium">
              <span className="size-2 rounded-full bg-opportunity" />
              {ORG.account}
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        <nav className="flex items-center gap-1 overflow-x-auto px-6 pb-3 md:hidden">
          {NAV.map((n) => {
            const active = n.exact ? loc.pathname === n.to : loc.pathname.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={[
                  "shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium",
                  active
                    ? "border-ink bg-ink text-primary-foreground"
                    : "border-border bg-card text-ink-soft",
                ].join(" ")}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="mx-auto max-w-[1400px] px-6 pb-24 pt-8 lg:px-10">
        <Outlet />
      </main>

      <footer className="border-t border-border/60 bg-canvas">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs text-ink-muted lg:px-10">
          <span className="font-mono uppercase tracking-[0.2em]">
            {ORG.brand} · {ORG.pilot}
          </span>
          <span className="flex items-center gap-1">
            © Trustidex AI 2026 · {ORG.version}
            <ArrowUpRight className="size-3" />
          </span>
        </div>
      </footer>
    </div>
  );
}
