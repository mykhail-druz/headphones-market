import "bootstrap/dist/css/bootstrap.css";
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
        <title>Интернет-магазин e-ushki: наушники и игровые гарнитуры</title>
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
