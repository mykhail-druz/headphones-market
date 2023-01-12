import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import Link from "next/link";
import { client, urlFor } from "~/lib/client";
import Button from "~/components/Button/button";
import { useStateContext } from "~/context/StateContext";

const ProductPage = ({ product, products }) => {
  const {
    name, details, price, image,
  } = product;

  const { decQty, incQty, qty } = useStateContext();

  return (
    <div className="tw-w-full">
      <div className="tw-flex tw-flex-col tw-mx-auto tw-w-2/3 tw-justify-center">
        <Link href={"/"}>
          <span className="tw-text-xl tw-duration-500"> &lsaquo; Back</span>
        </Link>
        <div className="tw-flex tw-space-x-2">
          <div className="tw-flex tw-space-x-2">
            {image && (
              <img
                className="tw-ml-auto tw-w-2/3 tw-border tw-border-neutral-300 rounded-2"
                width={"200"}
                height={"200"}
                src={urlFor(image && image[0])}
              />
            )}
            <div className="tw-flex tw-flex-col tw-space-y-2">
              {image && (
                <img
                  width={"128"}
                  height={"128"}
                  src={urlFor(image && image[0])}
                  className="tw-border tw-border-neutral-300 rounded-2"
                />
              )}
              {image && (
                <img
                  width={"128"}
                  height={"128"}
                  src={urlFor(image && image[0])}
                  className="tw-border tw-border-neutral-300 rounded-2"
                />
              )}
              {image && (
                <img
                  width={"128"}
                  height={"128"}
                  src={urlFor(image && image[0])}
                  className="tw-border tw-border-neutral-300 rounded-2"
                />
              )}
            </div>
          </div>
          <div className="tw-flex tw-flex-col tw-space-y-4 tw-w-2/3 tw-my-auto">
            <h1 className="tw-text-2xl">{name}</h1>
            <p>{details}</p>
            <p className="tw-text-lg">{price} ₴</p>
            <div className="quantity">
              <h3>Quantity:</h3>
              <p className="quantity-desc">
                <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                <span className="num">{qty}</span>
                <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
              </p>
            </div>
            <Button link={"/"} outline={false}>
              Buy now
            </Button>
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
