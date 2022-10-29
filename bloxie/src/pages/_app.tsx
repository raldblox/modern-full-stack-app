import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

import { withTRPC } from "@trpc/next";
import type { AppRouter } from "@/backend/router";

function getBaseUrl() {
  if (process.browser) return "";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  return `https://localhost:${process.env.PORT ?? 3000}`;
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
    };
  },
  ssr: false,
})(MyApp);
