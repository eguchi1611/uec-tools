import { CustomThemeProvider } from "@/components/custom-theme-provider";
import Layout from "@/components/layout";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CustomThemeProvider>
  );
}
