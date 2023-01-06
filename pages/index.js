import React from "react";

import { createClient } from "next-sanity";

import { Product, FooterBanner, HeaderBanner } from "../components";

function HomePage() {
  return (
    <>
      Banner
      <div className="products-heading">
        <h2>Best sellings</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>
      Footer
    </>
  );
}

const client = createClient({
  projectId: "f0p88h7i",
  dataset: "production",
  apiVersion: "2023-01-06",
  useCdn: false,
});

export async function getStaticProps() {
  const product = await client.fetch(`*[_type == "product"]`);

  return {
    props: {
      product,
    },
  };
}
export default HomePage;
