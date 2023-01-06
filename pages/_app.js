import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Head from "next/head";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
