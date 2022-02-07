import "../styles/globals.scss";
import * as React from "react";
import NextNProgress from "nextjs-progressbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../static/theme";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <NextNProgress
          color="#0E284FFF"
          startPosition={0.5}
          stopDelayMs={150}
          height={2}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default MyApp;
