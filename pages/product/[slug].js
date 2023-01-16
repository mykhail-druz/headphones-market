import React from "react";

import Link from "next/link";
import { client, urlFor } from "~/lib/client";
import { Button, Cart, ItemCount, ProductImages } from "~/components";
import { useStateContext } from "~/context/StateContext";

const ProductPage = ({ product, products }) => {
  const {
    name, details, price, image,
  } = product;

  const { decQty, incQty, qty, onAdd } = useStateContext();

  return (
    <div className="tw-w-full tw-my-auto tw-mt-24">
      <div className="tw-flex tw-flex-col tw-mx-auto tw-w-3/4 tw-justify-center tw-items-center">
        <div className="tw-flex tw-space-x-4 tw-justify-center">
          <ProductImages images={image} />

          <div className="tw-flex tw-flex-col tw-w-1/3">
            <div className="tw-space-y-8">
              <h1 className="tw-text-2xl">{name}</h1>
              <p className="tw-text-xl tw-font-bold">{price} ₴</p>
              <p className="tw-text-xl">{details}</p>
            </div>
            <div className="tw-flex tw-flex-col tw-mt-auto tw-w-full tw-space-y-8">
            <ItemCount qty={qty} incQty={incQty} decQty={decQty} />
              <div className="tw-flex tw-flex-col tw-space-y-2">
                <Button product={product} outline={true}>
                  Add to Cart
                </Button>
                <Button link={"/"} outline={false}>
                  Buy now
                </Button>
              </div>
            </div>
          </div>
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
