import React from "react";
import { client } from "~/lib/client";
import {
  Button, ItemCount, ProductImages, LimitText,
} from "~/components";
import { useStateContext } from "~/context/StateContext";

const ProductPage = ({ product }) => {
  const {
    name, details, price, image,
  } = product;

  const {
    decQty, incQty, qty, onAdd,
  } = useStateContext();

  return (
    <div className="w-full my-auto mt-14">
      <div className="flex flex-col mx-auto w-3/4 justify-center items-center py-16">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 justify-center text-primary">
          <ProductImages images={image} />
          <div className="flex flex-col lg:w-1/2">
            <div className="space-y-2 lg:mb-0 mb-2">
              <h1 className="text-xl">{name}</h1>
              <p className="text-lg font-bold">{price} ₴</p>
              {/* <LimitText text={details} limit={100} /> */}
              <p className="text-small">{details}</p>
            </div>
            <div className="flex flex-col mt-auto w-full space-y-4">
              <div>
                <ItemCount qty={qty} incQty={incQty} decQty={decQty} />
              </div>
              <div className="flex flex-col space-y-2">
                <Button
                  onClick={() => onAdd(product, qty)}
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
