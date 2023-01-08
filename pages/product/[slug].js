import React from "react";
import { client, urlFor } from "/src/lib/client";
import { Button } from "/src/components";

const ProductPage = ({ product, products }) => {
  const { name, details, price, image } = product;

  return (
    <div className="tw-w-full">
      <div className="tw-flex tw-mx-auto tw-w-2/3 tw-justify-center">
        <div className="tw-flex">
          {image && <img className="" src={urlFor(image && image[0])} />}
          <div className="tw-flex tw-flex-col">
            {image && (
              <img
                width={"128"}
                height={"128"}
                src={urlFor(image && image[0])}
                className=""
              />
            )}
            {image && (
              <img
                width={"128"}
                height={"128"}
                src={urlFor(image && image[0])}
                className=""
              />
            )}
            {image && (
              <img
                width={"128"}
                height={"128"}
                src={urlFor(image && image[0])}
                className=""
              />
            )}
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-space-y-4 tw-w-1/3">
          <h1 className="tw-text-2xl">{name}</h1>
          <p>{details}</p>
          <p className="tw-text-lg">{price} $</p>
          <Button link={"/"} outline={false}>
            Buy now
          </Button>
        </div>
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
