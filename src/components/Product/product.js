import React from "react";
import Link from "next/link";
import { urlFor } from "~/lib/client";

const Product = ({ product: { image, name, slug, price } }) => (
  <div className="tw-max-w-[400px] tw-h-[400px] hover:tw-scale-105 tw-duration-500">
    <Link href={`/product/${slug.current}`}>
      <div className="">
        {image && (
          <img
            src={urlFor(image && image[0])}
            className="tw-w-[300px] tw-h-[300px] tw-border tw-p-6 tw-object-scale-down tw-bg-white"
            alt={name}
          />
        )}
        <div className="tw-flex">
          <div className="tw-space-y-2">
            <p className="tw-text-xl">{name}</p>
            <p className="tw-font-bold tw-text-lg">{price} ₴</p>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default Product;
