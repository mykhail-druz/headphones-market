import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-hot-toast";
import { client } from "~/lib/client";
import { Button, ItemCount, ProductImages } from "~/components";
import { useStateContext } from "~/context/StateContext";
import getStripe from "~/lib/getStripe";
/* eslint-disable*/
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
/* eslint-enable */
const ProductPage = ({ product }) => {
  const {
    name, details, price, image,
  } = product;
  const {
    decQty, incQty, qty, onAdd,
  } = useStateContext();
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([product]),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Переходжу на другу сторінку...");
    stripe.redirectToCheckout({
      sessionId: data.id,
    });
  };

  const buyNow = () => {
    onAdd(product, qty);
    return handleCheckout();
  };

  return (
    <div className="w-full my-auto mt-14">
      <div className="flex flex-col mx-auto w-3/4 justify-center items-center py-16">
        <div className="flex flex-col lg:flex-row space-y-4 w-full lg:space-y-0 lg:space-x-4 justify-center text-primary">
          <ProductImages images={image} />
          <div className="flex flex-col lg:w-1/3">
            <div className="space-y-2 lg:mb-0 mb-2">
              <h1 className="text-xl font-bold">{name}</h1>
              <p className="text-lg font-bold">{price} ₴</p>
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
                <Button onClick={buyNow} outline={false}>
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
