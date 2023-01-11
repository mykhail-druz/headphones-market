import React from "react";
import Link from "next/link";
import { client, urlFor } from "~/lib/client";
import Button from "~/components/Button/button";
import Image from "next/image";

const ProductPage = ({ product, products }) => {
  const { name, details, price, image } = product;

  return (
    <div className="tw-w-full">
      <div className="tw-flex tw-flex-col tw-mx-auto tw-justify-center">
        <Link href={"/"}>
          <span className="tw-text-xl tw-duration-500"> &lsaquo; Back</span>
        </Link>
        <div className="tw-h-[80vh] tw-items-center  tw-pt-12">
          <div className="tw-flex tw-justify-center tw-space-x-2">
            <div className="tw-flex tw-space-x-2 tw-h-[400px] tw-w-[400px]">
              {image && (
                <img
                  alt={product.name}
                  className="tw-border tw-border-neutral-300 rounded-2 tw-shadow-md"
                  src={urlFor(image && image[0])}
                />
              )}
              <div>
                {image?.map((img, index) => (
                  <img
                    key={index}
                    src={urlFor(img)}
                    className=""
                    onMouseEnter={""}
                  />
                ))}
              </div>
            </div>
            <div className="tw-flex tw-flex-col tw-space-y-4 tw-w-[400px] tw-h-[400p] tw-justify-between">
              <div className="tw-flex tw-flex-col tw-space-y-4">
                <h1 className="tw-text-2xl">{name}</h1>
                <p className="tw-text-xl">{details}</p>
              </div>
              <div className="tw-flex tw-flex-col tw-space-y-4">
                <p className="tw-text-lg">Price: {price} $</p>
                <div className="tw-flex tw-flex-col tw-w-full tw-space-y-2">
                  <Button link={"/"} outline={true} className="tw-w-full">
                    Add to Cart
                  </Button>
                  <Button link={"/"} outline={false} className="tw-w-full">
                    Buy now
                  </Button>
                </div>
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
