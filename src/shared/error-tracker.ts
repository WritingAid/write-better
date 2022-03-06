import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
    dsn: "https://b1d81a9e5f1546f79885a473ce33128c@o526305.ingest.sentry.io/6244539",

    release: "write-better@1.1.0",
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});