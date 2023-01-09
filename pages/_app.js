import "bootstrap/dist/css/bootstrap.css";
import "~/styles/globals.css";
import React from "react";
import Head from "next/head";
import Navbar from "~/components/Header/navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
