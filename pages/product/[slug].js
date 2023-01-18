import React from "react";
import { client } from "~/lib/client";
import { Button, ItemCount, ProductImages, LimitText } from "~/components";
import { useStateContext } from "~/context/StateContext";

const ProductPage = ({ product, products }) => {
  const { name, details, price, image } = product;

  const { decQty, incQty, qty, onAdd } = useStateContext();

  return (
    <div className="tw-w-full tw-my-auto tw-mt-14">
      <div className="tw-flex tw-flex-col tw-mx-auto tw-w-3/4 tw-justify-center tw-items-center tw-py-16">
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-space-y-4 lg:tw-space-y-0 lg:tw-space-x-4 tw-justify-center">
          <ProductImages images={image} />
          <div className="tw-flex tw-flex-col lg:tw-w-1/2">
            <div className="tw-space-y-2 lg:tw-mb-0 tw-mb-2">
              <h1 className="tw-text-xl">{name}</h1>
              <p className="tw-text-lg tw-font-bold">{price} ₴</p>
              {/* <LimitText text={details} limit={100} /> */}
              <p className="tw-text-small">{details}</p>
            </div>
            <div className="tw-flex tw-flex-col tw-mt-auto tw-w-full tw-space-y-4">
              <div>
                <ItemCount qty={qty} incQty={incQty} decQty={decQty} />
              </div>
              <div className="tw-flex tw-flex-col tw-space-y-2">
                <Button
                  onAdd={onAdd}
                  qty={qty}
                  product={product}
                  outline={true}
                >
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
