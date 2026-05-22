import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Toaster } from "@/components/ui/sonner";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <Layout>
      <div className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-7xl text-gradient-gold">404</h1>
          <h2 className="mt-4 font-display text-2xl">Lost in the clouds</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you're looking for has taken off without you.
          </p>
          <div className="mt-6">
            <Link to="/" className="inline-flex items-center rounded-md btn-gold px-5 py-2.5 text-sm font-medium">
              Return home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <Layout>
      <div className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-3xl">This page didn't load</h1>
          <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head home.</p>
          <div className="mt-6 flex justify-center gap-2">
            <button
              onClick={() => { router.invalidate(); reset(); }}
              className="rounded-md btn-gold px-4 py-2 text-sm font-medium"
            >
              Try again
            </button>
            <a href="/" className="rounded-md border border-border px-4 py-2 text-sm font-medium">Home</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Freedom — VIP Airport Assistance Worldwide" },
      { name: "description", content: "Freedom Aviation: VIP meet & assist, arrival, departure and transit services in 200+ airports worldwide." },
      { name: "author", content: "Freedom Aviation" },
      { property: "og:title", content: "Freedom — VIP Airport Assistance Worldwide" },
      { property: "og:description", content: "VIP meet & assist, arrival, departure and transit services in airports worldwide." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('freedom-theme');if(t==='light'){document.documentElement.classList.add('light')}}catch(e){}`,
          }}
        />
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
      <Layout>
        <Outlet />
      </Layout>
      <Toaster />
    </QueryClientProvider>
  );
}
