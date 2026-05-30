import "../global.css"
import { Stack } from "expo-router";
import * as Sentry from '@sentry/react-native';

const userConsentForTelemetry = false;

Sentry.init({
  dsn: 'https://5c36aa624e75f39c9e02e97232f953c2@o4511467835293696.ingest.de.sentry.io/4511475041304656',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: userConsentForTelemetry,

  // Enable Logs
  enableLogs: true,

  // Configure Session Replay
  replaysSessionSampleRate: userConsentForTelemetry ? 0.1 : 0,
  replaysOnErrorSampleRate: userConsentForTelemetry ? 1 : 0,
  integrations: userConsentForTelemetry ? [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()] : [],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

import { ClerkProvider } from '@clerk/expo'
import { tokenCache } from '@clerk/expo/token-cache'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

export default Sentry.wrap(function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <Stack  screenOptions={{headerShown: false}}/>
    </ClerkProvider>
  )
});
