import React from "react";
import Link from "next/link";
import { urlFor } from "~/lib/client";

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
            className="product-image tw-w-60 tw-h-60 "/>
        )}
        <div className="d-flex">
          <div className="m-3">
            <p className="product-name">{name}</p>
            <p className="product-price">{price} ₴</p>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default Product;
