import "bootstrap/dist/css/bootstrap.css";
import "~/styles/globals.css";
import React from "react";
import Head from "next/head";
import Layout from "~/Layouts/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
  );
}
