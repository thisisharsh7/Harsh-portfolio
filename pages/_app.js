import "../styles/globals.css";
import Header from "../Extend/Header";
import Head from "next/head";
import Footer from "../Extend/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <title>Harsh Kumar | 👨‍💻</title>
      </Head>

      <Header />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
