import "~/styles/globals.css";
import React from "react";
import { Toaster } from "react-hot-toast";

import Head from "next/head";
import Layout from "~/Layouts/layout";
import { StateContext } from "~/context/StateContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Інтернет магазин e-ushki: навушник та ігрові гарнітури</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </>
  );
}
