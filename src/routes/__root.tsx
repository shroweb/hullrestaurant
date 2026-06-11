import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-5xl">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          That page has slipped the net. Try the home page.
        </p>
        <Link to="/" className="btn-primary mt-6">
          Back to the restaurant
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Please try again, or call us on 01482 326136.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Humber Fish Co. — Hull Seafood, Shellfish & Specials" },
      {
        name: "description",
        content:
          "Independent seafood and crustacea restaurant on Hull's Humber Street. Locally landed fish, oysters and shellfish. Reservations on 01482 326136.",
      },
      { name: "author", content: "Humber Fish Co." },
      { property: "og:site_name", content: "Humber Fish Co." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Humber Fish Co. — Hull Seafood & Shellfish" },
      {
        property: "og:description",
        content:
          "Locally caught shellfish, whole fish and oysters served on Hull's historic Humber Street.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Humber Fish Co.",
          servesCuisine: ["Seafood", "British"],
          priceRange: "££",
          telephone: "+441482326136",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Humber Street",
            addressLocality: "Hull",
            addressRegion: "East Yorkshire",
            addressCountry: "GB",
          },
          openingHours: [
            "We 12:00-21:30",
            "Th 12:00-21:30",
            "Fr 12:00-22:30",
            "Sa 12:00-22:30",
            "Su 12:00-17:00",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
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
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
