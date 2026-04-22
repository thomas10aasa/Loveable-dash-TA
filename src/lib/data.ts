// Mock data derived from the Trustidex AI / ReSys screenshots.
// $ revenue framing assumes avg deal value $18K for B2B custom software.

export const ORG = {
  brand: "Trustidex",
  product: "ReSys",
  pilot: "Recommendation Probability System — Pilot",
  account: "info@trusidex.ai",
  lastCheck: "21 Apr 2026",
  version: "v0.17",
  avgDealValue: 18000,
};

export const SCORE = {
  current: 25,
  previous: 19,
  target: 70,
  searchesAnalyzed: 60,
  lostSearches: 45,
  wonSearches: 12,
};

// Weekly trend (12 weeks)
export const SCORE_TREND = [
  { w: "W1", score: 14, lost: 51 },
  { w: "W2", score: 16, lost: 49 },
  { w: "W3", score: 15, lost: 50 },
  { w: "W4", score: 17, lost: 48 },
  { w: "W5", score: 18, lost: 47 },
  { w: "W6", score: 18, lost: 47 },
  { w: "W7", score: 19, lost: 46 },
  { w: "W8", score: 20, lost: 46 },
  { w: "W9", score: 21, lost: 45 },
  { w: "W10", score: 22, lost: 45 },
  { w: "W11", score: 23, lost: 45 },
  { w: "W12", score: 25, lost: 45 },
];

export const MODELS = [
  { name: "gpt-5.4-mini", visibility: 65, runs: 20, hits: 13, label: "Strongest" },
  { name: "claude-sonnet-4-6", visibility: 10, runs: 20, hits: 2, label: "Weak" },
  { name: "sonar", visibility: 0, runs: 20, hits: 0, label: "Absent" },
];

export const COMPETITORS = [
  { name: "ReSys", mentions: 12, you: true, trend: +2, models: { gpt: 13, claude: 1, sonar: 0 } },
  { name: "EYT Eesti OÜ", mentions: 7, trend: +3, models: { gpt: 1, claude: 4, sonar: 2 } },
  { name: "ADME", mentions: 6, trend: +1, models: { gpt: 4, claude: 0, sonar: 2 } },
  { name: "ELEKS", mentions: 5, trend: +2, models: { gpt: 0, claude: 2, sonar: 3 } },
  { name: "Bamboo Agile", mentions: 5, trend: +4, models: { gpt: 0, claude: 4, sonar: 1 } },
  { name: "PROCESSA", mentions: 4, trend: +1, models: { gpt: 0, claude: 0, sonar: 4 } },
  { name: "SapientPro", mentions: 4, trend: 0, models: { gpt: 0, claude: 1, sonar: 3 } },
  { name: "Brocoders", mentions: 4, trend: -1, models: { gpt: 1, claude: 0, sonar: 3 } },
  { name: "Jelvix", mentions: 4, trend: +2, models: { gpt: 0, claude: 0, sonar: 4 } },
  { name: "Sidis Group", mentions: 3, trend: 0, models: { gpt: 0, claude: 0, sonar: 3 } },
];

export type Severity = "critical" | "high" | "medium";

export const RISK_THEMES = [
  {
    id: "legacy",
    theme: "Legacy software modernization",
    severity: "critical" as Severity,
    lostSearches: 14,
    revenueAtRisk: 252000,
    topWinner: "Helmes",
    sampleQuery: "Which Tallinn software companies can help migrate our legacy enterprise system?",
    fix: "Publish 3 case studies on monolith→microservices migrations + claim Clutch/GoodFirms 'Application Modernization' category.",
    effortDays: 14,
    projectedLift: 18,
  },
  {
    id: "lowcode",
    theme: "Low-code enterprise apps",
    severity: "critical" as Severity,
    lostSearches: 11,
    revenueAtRisk: 198000,
    topWinner: "Mooncascade",
    sampleQuery: "Who in Estonia can help us evaluate and implement a low-code platform?",
    fix: "Build /low-code landing page with Mendix/OutSystems comparison + 2 pilot case studies.",
    effortDays: 21,
    projectedLift: 14,
  },
  {
    id: "automation",
    theme: "Workflow / process automation",
    severity: "high" as Severity,
    lostSearches: 10,
    revenueAtRisk: 180000,
    topWinner: "EYT Eesti OÜ",
    sampleQuery: "We need a firm in Estonia to identify and automate repetitive processes",
    fix: "Add automation services page targeting finance & HR; pursue 5 third-party reviews on TheManifest.",
    effortDays: 18,
    projectedLift: 11,
  },
  {
    id: "custom",
    theme: "Custom enterprise software",
    severity: "medium" as Severity,
    lostSearches: 10,
    revenueAtRisk: 180000,
    topWinner: "ELEKS",
    sampleQuery: "Which companies in Tallinn offer custom enterprise software for mid-sized businesses?",
    fix: "Strengthen 'Enterprise' section on resys.com with verticals (finance, ops, healthcare).",
    effortDays: 10,
    projectedLift: 8,
  },
];

export const OPPORTUNITIES = [
  {
    id: "directories",
    title: "Claim 5 priority directories",
    impact: "High",
    horizon: "0–30 days",
    revenueUnlock: 145000,
    scoreLift: 12,
    detail: "Clutch · GoodFirms · DesignRush · TheManifest · Sortlist — competitors appear on all five.",
  },
  {
    id: "queryPages",
    title: "Build query-specific landing pages",
    impact: "High",
    horizon: "30–60 days",
    revenueUnlock: 210000,
    scoreLift: 16,
    detail: "Legacy modernization, workflow automation, low-code implementation, enterprise app dev.",
  },
  {
    id: "validation",
    title: "Independent validation push",
    impact: "Medium",
    horizon: "60–90 days",
    revenueUnlock: 95000,
    scoreLift: 9,
    detail: "Reviews, case studies, third-party mentions reinforcing modernization specialist position.",
  },
];

export const ANOMALIES = [
  {
    id: "sonar",
    label: "Sonar coverage collapsed",
    detail: "0% visibility on Sonar — 20 searches, 0 hits. Largest single drop in pilot history.",
    impact: 380000,
  },
  {
    id: "claude",
    label: "Claude lagging GPT 6×",
    detail: "Claude visibility 10% vs GPT 65% — a 55-pt gap on identical query set.",
    impact: 175000,
  },
];

export const LOST_QUERIES = [
  { query: "Are there Tallinn companies that implement low-code platforms for enterprise?", model: "claude-sonnet-4-6", winner: "Swaran Soft", value: 22000, theme: "lowcode" },
  { query: "Can a software company in Tallinn help us replace our legacy ERP?", model: "claude-sonnet-4-6", winner: "ERPNext (Frappe)", value: 28000, theme: "legacy" },
  { query: "Tallinn-based partner that delivers end-to-end business process automation", model: "claude-sonnet-4-6", winner: "Relab", value: 19000, theme: "automation" },
  { query: "Tallinn-based company that specializes in bespoke software for complex workflows", model: "claude-sonnet-4-6", winner: "ELEKS", value: 24000, theme: "custom" },
  { query: "Partner in Tallinn to deploy a low-code solution for rapid internal app development", model: "claude-sonnet-4-6", winner: "Riseapps", value: 17000, theme: "lowcode" },
  { query: "Software engineering firm in Estonia to build a custom internal tool for ops", model: "claude-sonnet-4-6", winner: "Bamboo Agile", value: 21000, theme: "custom" },
  { query: "Business process automation specialist in Estonia to streamline approval workflows", model: "claude-sonnet-4-6", winner: "FlowBook", value: 18000, theme: "automation" },
  { query: "Development partner in Estonia to build a tailored business management system", model: "claude-sonnet-4-6", winner: "dev.family", value: 26000, theme: "custom" },
  { query: "Estonian technology partner to refactor and upgrade our aging enterprise platform", model: "claude-sonnet-4-6", winner: "Belitsoft", value: 32000, theme: "legacy" },
  { query: "We have an outdated monolithic application and need a firm in Estonia to modernize", model: "claude-sonnet-4-6", winner: "Helmes", value: 35000, theme: "legacy" },
  { query: "Software modernization services in Tallinn to upgrade legacy enterprise systems", model: "gpt-5.4-mini", winner: "CyberROOM", value: 30000, theme: "legacy" },
  { query: "Best low-code platform consultants in Tallinn to build scalable business apps", model: "gpt-5.4-mini", winner: "Capsy Studio", value: 23000, theme: "lowcode" },
  { query: "Enterprise process automation partner in Tallinn, Estonia to reduce manual work", model: "gpt-5.4-mini", winner: "ADME", value: 22000, theme: "automation" },
];

export const ROADMAP = [
  {
    horizon: "0–30 days",
    color: "risk" as const,
    items: [
      { title: "Claim & optimize 5 priority B2B directories", owner: "Marketing", impact: 12 },
      { title: "Audit messaging for modernization & automation keywords", owner: "Content", impact: 4 },
      { title: "Add enterprise service pages to resys.com", owner: "Web", impact: 6 },
    ],
  },
  {
    horizon: "30–60 days",
    color: "signal" as const,
    items: [
      { title: "Publish case studies — legacy modernization & workflow automation", owner: "Content", impact: 10 },
      { title: "Build comparison pages for low-code & custom software services", owner: "Web", impact: 8 },
      { title: "Outreach for third-party mentions and reviews", owner: "PR", impact: 6 },
    ],
  },
  {
    horizon: "60–90 days",
    color: "opportunity" as const,
    items: [
      { title: "Expand authority via directory and media placements", owner: "PR", impact: 7 },
      { title: "Monitor model-specific mention rates, refine underperforming queries", owner: "RevOps", impact: 5 },
      { title: "Iterate content based on competitor coverage and search visibility", owner: "Content", impact: 9 },
    ],
  },
];

export function fmtMoney(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1000)}K`;
  return `$${n}`;
}

export const TOTAL_REVENUE_AT_RISK = RISK_THEMES.reduce((s, t) => s + t.revenueAtRisk, 0);
export const TOTAL_OPPORTUNITY = OPPORTUNITIES.reduce((s, o) => s + o.revenueUnlock, 0);
