import React from "react";
import Link from "next/link";
import { urlFor } from "~/lib/client";
import Button from "~/components/Button/button";

const Product = ({
  product: {
    image, name, slug, price,
  },
}) => (
  <div>
    <Link href={`/product/${slug.current}`}>
      <div className="product-card">
        {image && (
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
        )}
        <div className="d-flex">
          <div className="m-3">
            <p className="product-name">{name}</p>
            <p className="product-price">${price}</p>
          </div>
          <div className="tw-ml-auto tw-mt-auto tw-mb-6">
            <Button link={`/product/${slug.current}`}>Buy</Button>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default Product;