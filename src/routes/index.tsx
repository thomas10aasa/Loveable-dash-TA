import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Pulse } from "@/components/Pulse";
import { ActionTriage } from "@/components/ActionTriage";
import { CompetitorMap } from "@/components/CompetitorMap";
import { ModelRadar } from "@/components/ModelRadar";
import { LostRevenue } from "@/components/LostRevenue";

export const Route = createFileRoute("/")({
  component: WarRoom,
  head: () => ({
    meta: [
      { title: "War Room — Trustidex AI" },
      {
        name: "description",
        content:
          "Real-time AI visibility command center. See what revenue you're losing to competitors and exactly how to win it back.",
      },
    ],
  }),
});

function WarRoom() {
  return (
    <AppShell>
      <Pulse />
      <ActionTriage />
      <ModelRadar />
      <CompetitorMap />
      <LostRevenue />
    </AppShell>
  );
}
