import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import { ThemeContextProvider } from "../context/themeContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeContextProvider>
        <Layout>
          <Head>
            <title>Skantz Support - Helhetsleverantör för hela sverige!</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
