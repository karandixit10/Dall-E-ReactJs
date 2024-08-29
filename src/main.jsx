import React from "react";
import ReactDOM from "react-dom/client";
import 'react-toastify/dist/ReactToastify.css';
import App from "./App.jsx";
import "./index.css";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://123cf97c27bdcee7726fd1a56067ebe6@o190899.ingest.us.sentry.io/4507863082401792",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect : React.useEffect,
    }),
    Sentry.replayIntegration({
      maskAllText : false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0, 
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
