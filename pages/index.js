import React from "react";
import { createClient } from "next-sanity";
import Link from "next/link";

const HomePage = ({ product }) => (
  <>
    Banner
    <div className="products-heading">
      <h2>Best sellings</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className="products-container">
      {product.map((product) => {
        console.log(product.slug.current);
        return (
          <div key={product.id}>
            {product.name}
            <Link href={`product/${product.slug.current}`}>Button</Link>
          </div>
        );
      })}
    </div>
    Footer
  </>
);

const client = createClient({
  projectId: "f0p88h7i",
  dataset: "production",
  apiVersion: "2023-01-06",
  useCdn: false,
});

export async function getStaticProps() {
  const product = await client.fetch('*[_type == "product"]');

  return {
    props: {
      product,
    },
  };
}
export default HomePage;
