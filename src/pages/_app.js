import Layout from "@/components/layout/Layout";
import "../scss/main.scss";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
