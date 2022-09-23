import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import { ThemeContextProvider } from "../context/themeContext";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CookiesProvider>
        <ThemeContextProvider>
          <Layout>
            <Head>
              <title>
                Skantz Support - Helhetsleverantör för hela sverige!
              </title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
          </Layout>
        </ThemeContextProvider>
      </CookiesProvider>
    </>
  );
}

export default MyApp;
