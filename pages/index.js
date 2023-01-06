import { createClient } from "next-sanity";
import React from "react";

const HomePage = ({ product }) => {
  return (
    <>
      Banner
      <div className="products-heading">
        <h2>Best sellings</h2>
        <p>Speakers categories</p>
      </div>
      <div className="products-container">
        {product.map((product) => {
          return <div key={product.id}>{product.name}</div>;
        })}
      </div>
      Footer
    </>
  );
};

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
