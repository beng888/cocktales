import "../styles/globals.css";
import "../styles/test.css";

import Layout from "../src/components/Layout";
import { AppWrapper } from "../src/context/state";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
    </QueryClientProvider>
  );
}

export default MyApp;
