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
import ldkLogo from "../assets/ldk logo.png?url";
import { reportError } from "../lib/error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  jsonLdScript,
} from "../lib/schema";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow">Error 404</div>
        <h1 className="mt-4 font-display text-6xl font-medium tracking-tight">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block border border-accent bg-accent px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-accent-foreground"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow">Error</div>
        <h1 className="mt-4 font-display text-3xl font-medium tracking-tight">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-accent bg-accent px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-accent-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-foreground"
          >
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
      { title: "Lewis & De Kroon Inc, Structural & Civil Engineering, Cape Town" },
      {
        name: "description",
        content:
          "Lewis & De Kroon Inc (LDK), Structural and civil engineering consultants in Cape Town, delivering healthcare, government and commercial projects across South Africa.",
      },
      { name: "author", content: "Lewis & De Kroon Inc" },
      { property: "og:title", content: "Lewis & De Kroon Inc, Structural & Civil Engineering" },
      {
        property: "og:description",
        content:
          "Cape Town structural and civil engineering consultants. Healthcare, government and commercial projects since 1984.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: ldkLogo, type: "image/png" },
      { rel: "preconnect", href: "https://api.fontshare.com" },
      {
        rel: "stylesheet",
        href: "https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&f[]=author@400,500,600,700&display=swap",
      },
    ],
    scripts: [
      jsonLdScript({
        "@context": "https://schema.org",
        "@graph": [
          organizationSchema(),
          localBusinessSchema(),
          websiteSchema(),
        ],
      }),
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
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
