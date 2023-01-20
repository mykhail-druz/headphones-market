import React from "react";
import Link from "next/link";
import { urlFor } from "~/lib/client";

const Product = ({ product: { image, name, slug, price } }) => (
  <div className="max-w-[400px] h-[400px] hover:scale-105 duration-500">
    <Link href={`/product/${slug.current}`}>
      <div className="">
        {image && (
          <img
            src={urlFor(image && image[0])}
            className="w-[300px] h-[300px] border p-6 object-scale-down bg-white"
            alt={name}
          />
        )}
        <div className="flex">
          <div className="space-y-2">
            <p className="text-xl">{name}</p>
            <p className="font-bold text-lg">{price} ₴</p>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default Product;
