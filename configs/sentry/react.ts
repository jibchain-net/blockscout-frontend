import type * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

export const config: Sentry.BrowserOptions = {
  environment: process.env.VERCEL_ENV || process.env.NODE_ENV,
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: [ new BrowserTracing() ],
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
};

export function configureScope(scope: Sentry.Scope) {
  scope.setTag('app_instance', process.env.NEXT_PUBLIC_APP_INSTANCE);
}
