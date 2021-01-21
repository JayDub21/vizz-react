import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

function init() {
  Sentry.init({
    dsn:
      'https://e34bce89c6ef4def8426693e53014bcb@o508229.ingest.sentry.io/5600434',
    release: 'my-project-name@' + process.env.npm_package_version,
    autoSessionTracking: true,
    integrations: [new Integrations.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });
}

function log(error) {
  console.log(error);
}

export default {
  init,
  log,
};
