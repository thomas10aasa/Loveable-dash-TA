import { Link, useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ORG } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import logoUrl from "@/assets/trustidex-logo-dark.png";
import earlyAccessUrl from "@/assets/early-access-wing.png";

const NAV: { to: string; label: string; exact?: boolean }[] = [
  { to: "/", label: "War Room", exact: true },
  { to: "/competitors", label: "Competitors" },
  { to: "/opportunities", label: "Opportunities" },
  { to: "/roadmap", label: "Roadmap" },
];

export function AppShell({ children }: { children: ReactNode }) {
  const loc = useLocation();
  return (
    <div className="min-h-screen bg-canvas text-ink">
      {/* Top announcement bar */}
      <div className="w-full text-center text-[11px] font-medium uppercase tracking-[0.18em] text-white" style={{ background: "#2563eb" }}>
        <div className="mx-auto max-w-[1400px] px-6 py-2 lg:px-10">
          Early access · AI visibility intelligence for revenue teams
        </div>
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-white/10 backdrop-blur-xl" style={{ background: "#001653" }}>
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4 lg:px-10">
          <Link to="/" className="group flex items-center gap-4">
            <img src={logoUrl} alt="Trustidex" className="h-7 w-auto" />
            <span className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 no-underline md:inline-flex">
              RESYS · RECOMMENDATION PROBABILITY SYSTEM
              <img src={earlyAccessUrl} alt="Early Access" className="h-5 w-auto" />
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1 md:flex">
            {NAV.map((n) => {
              const active = n.exact ? loc.pathname === n.to : loc.pathname.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={[
                    "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                    active
                      ? "text-white shadow-luxe"
                      : "text-white/70 hover:text-white",
                  ].join(" ")}
                  style={active ? { background: "#e8a020" } : undefined}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden text-right md:block">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                Last check
              </div>
              <div className="text-xs font-medium text-white/85">{ORG.lastCheck}</div>
            </div>
            <div className="flex h-9 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 text-xs font-medium text-white">
              <span className="size-2 rounded-full" style={{ background: "#e8a020" }} />
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
                    ? "border-transparent text-white"
                    : "border-white/10 text-white/70",
                ].join(" ")}
                style={active ? { background: "#e8a020" } : undefined}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="mx-auto max-w-[1400px] px-6 pb-24 pt-8 lg:px-10">
        {children}
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
