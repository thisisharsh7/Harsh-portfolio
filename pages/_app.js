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
        <meta
          name="description"
          content="Portfolio of Front-End Web Developer build by Next Js and Tailwind css."
          key="desc"
        />
        <meta property="og:title" content="Harsh Kumar | 👨‍💻" />
        <meta
          property="og:description"
          content="Portfolio of Front-End Web Developer build by Next Js and Tailwind css."
        />
      </Head>

      <Header />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
