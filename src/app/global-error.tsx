
"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optional: log to your analytics/monitoring
    // console.error(error);
  }, [error]);

  return (
    <html>
      <body className="min-h-screen bg-white text-gray-900">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>

          <p className="mt-4 text-gray-700">
            We hit an unexpected error while rendering this page.
          </p>

          {error?.message ? (
            <pre className="mt-6 whitespace-pre-wrap rounded-lg bg-gray-100 p-4 text-sm text-gray-800">
              {error.message}
              {error.digest ? `\n\nDigest: ${error.digest}` : ""}
            </pre>
          ) : null}

          <div className="mt-8 flex gap-3">
            <button
              onClick={() => reset()}
              className="rounded-md border border-[#D4AF37] px-4 py-2 text-sm hover:bg-white/60"
            >
              Try again
            </button>
            <a
              href="/"
              className="rounded-md border px-4 py-2 text-sm hover:bg-gray-50"
            >
              Go home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}