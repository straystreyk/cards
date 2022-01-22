import "../styles/globals.scss";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="red"
        startPosition={0.5}
        stopDelayMs={150}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
