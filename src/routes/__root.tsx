import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Trustidex AI · War Room" },
      {
        name: "description",
        content:
          "AI visibility command center for revenue teams. See what pipeline you're losing to competitors and exactly how to recover it.",
      },
      { name: "author", content: "Trustidex AI" },
      { property: "og:title", content: "Trustidex AI · War Room" },
      {
        property: "og:description",
        content: "Where revenue teams find out what AI is saying about them — and what to do about it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Trustidex AI · War Room" },
      { name: "description", content: "Revenue Vision Hub is a visual dashboard for revenue operations, highlighting actionable insights and growth opportunities." },
      { property: "og:description", content: "Revenue Vision Hub is a visual dashboard for revenue operations, highlighting actionable insights and growth opportunities." },
      { name: "twitter:description", content: "Revenue Vision Hub is a visual dashboard for revenue operations, highlighting actionable insights and growth opportunities." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/061e568a-40f3-4bf6-9833-f773576ccfc0/id-preview-0c8105b1--d01c0d70-8484-4ae5-a5ac-1f6ee5aae693.lovable.app-1776872955054.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/061e568a-40f3-4bf6-9833-f773576ccfc0/id-preview-0c8105b1--d01c0d70-8484-4ae5-a5ac-1f6ee5aae693.lovable.app-1776872955054.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
