import { DisplayGate, SDKProvider } from '@tma.js/sdk-react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { type FC, useMemo } from 'react';

import { App } from '~/components/App.tsx';
import { ErrorBoundary } from '~/components/ErrorBoundary.tsx';

const DisplayError: FC<{ error: unknown }> = ({ error }) => (
  <blockquote>
    <code>
      {error instanceof Error
        ? error.message
        : JSON.stringify(error)}
    </code>
  </blockquote>
);

const ErrorBoundaryError: FC<{ error: unknown }> = ({ error }) => (
  <div>
    <p>An unhandled error occurred:</p>
    <DisplayError error={error} />
  </div>
);

const ErrorBoundarySDK: FC<{ error: unknown }> = ({ error }) => (
  <div>
    <p>
      An error occurred while initializing the SDK. You are probably running the application
      outside of Telegram (in usual browser, for example).
    </p>
    <DisplayError error={error} />
  </div>
);

const Loading: FC = () => <div>Application is loading</div>;

const Inner: FC = () => {
  const manifestUrl = useMemo(() => {
    return new URL('tonconnect-manifest.json', window.location.href).toString();
  }, []);

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <SDKProvider options={{ acceptCustomStyles: true, cssVars: true, complete: true }}>
        <DisplayGate error={ErrorBoundarySDK} loading={Loading} initial={Loading}>
          <App />
        </DisplayGate>
      </SDKProvider>
    </TonConnectUIProvider>
  );
};

export const Root: FC = () => (
  <ErrorBoundary fallback={ErrorBoundaryError}>
    <Inner />
  </ErrorBoundary>
);
