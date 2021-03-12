import "../styles/globals.css";
import "../styles/test.css";

import Layout from "../src/components/Layout";
import { AppWrapper } from "../src/context/state";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
