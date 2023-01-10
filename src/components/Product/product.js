import React from "react";
import Link from "next/link";
import { urlFor } from "~/lib/client";
import Button from "~/components/Button/button";

const Product = ({ product: { image, name, slug, price } }) => (
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
        <div className="tw-flex tw-justify-between tw-w-full">
          <div className="product-name">
            <p>{name}</p>
          </div>
          <div className="product-price">
            <p>${price}</p>
          </div>
        </div>
        <div className="tw-ml-auto tw-mt-auto tw-mb-6"></div>
      </div>
    </div>
  </Link>
);

export default Product;
