// Import global styles
import "../styles/globals.scss";
// Import type definitions
import type { AppProps } from "next/app";

// Custom App component
function MyApp({ Component, pageProps }: AppProps) {
  // Render the active page with its props
  return <Component {...pageProps} />;
}

export default MyApp;
