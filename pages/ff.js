import React, { useState } from "react";
import { client } from "~/lib/client";

const Product = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <img src={product.image.asset.url} alt={product.name} />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const page = params.page;
  const limit = 8;
  const offset = (page - 1) * limit;
  const products = await client.fetch(
    `*[_type == "product"] | order(_createdAt desc) [${offset}...${
      offset + limit
    }]`
  );
  return {
    props: { products },
  };
}

export async function getStaticPaths() {
  const count = await client.fetch(`count(*[_type == "product"])`);
  const paths = Array.from({ length: Math.ceil(count / 8) }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));
  console.log(paths);
  return { paths, fallback: false };
}
export default function Products({ products }) {
  const [page, setPage] = useState(1);
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  return (
    <div>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
      <button onClick={handlePreviousPage} disabled={page === 1}>
        Previous Page
      </button>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
}
