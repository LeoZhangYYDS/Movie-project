import Layout from "@/components/layout/Layout";
import "../scss/main.scss";

import { Fragment } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
