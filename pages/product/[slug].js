import Link from "next/link";
import React from "react";
import { client, urlFor } from "../../src/lib/client";

const ProductPage = ({ product, products }) => {
  const { name, description, price, image } = product;

  return (
    <div className="">
      {image && (
        <img width={"480"} height={"480"} src={urlFor(image && image[0])} />
      )}
      <div className="container">
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{price}</p>
        <Link href={"/"}>Buy now</Link>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;

  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: {
      product,
      products,
    },
  };
};
export const getStaticPaths = async () => {
  const query = '*[_type == "product"] {slug{current}}';
  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { slug: product.slug.current },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default ProductPage;
